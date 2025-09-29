import { notFound } from 'next/navigation';
import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { serialize } from 'next-mdx-remote/serialize'

const GITHUB_OWNER = 'skullbrain-lang';
const GITHUB_REPO = 'specification';
const GITHUB_PATH = 'src'; // flder in repo
const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_PATH}`;

const USE_DUMMY_SOURCE = true;
const dummyContents = [
    {
        slug: 'introduction', content: `# Introduction

Welcome to the Skullbrain Language Specification!   



` },
    {
        slug: 'syntax', content: `# Syntax

This section covers the syntax of the Skullbrain language.



` },
    {
        slug: 'semantics', content: `# Semantics

This section covers the semantics of the Skullbrain language.



` }
];

// Slug to file info
const cache = new Map<string, { download_url: string, content: string | null; }>();

export async function generateStaticParams() {
    if (cache.size == 0) {
        let files;
        if (USE_DUMMY_SOURCE) {
            files = [
                { name: 'introduction.md', download_url: 'https://raw.githubusercontent.com/skullbrain-lang/specification/main/src/introduction.md' },
                { name: 'syntax.md', download_url: 'https://raw.githubusercontent.com/skullbrain-lang/specification/main/src/syntax.md' },
                { name: 'semantics.md', download_url: 'https://raw.githubusercontent.com/skullbrain-lang/specification/main/src/semantics.md' }
            ];
        } else {
            const res = await fetch(GITHUB_API_URL);
            if (!res.ok) throw new Error('Failed to fetch files from GitHub');
            files = await res.json();
        }

        files
            .filter((file: any) => file.name.endsWith('.md'))
            .forEach((file: any) => {
                // download url should never be null for markdown files in general i think
                cache.set(file.name.replace(/\.md$/, ''), { download_url: file.download_url!, content: null });
            });
    }

    return Array.from(cache.keys()).map(slug => ({ slug }));

}

async function fetchMarkdownBySlug(slug: string) {
    const source = await getMarkdownContent();
    return await serialize(source)

    async function getMarkdownContent() {
        const cachedItem = cache.get(slug)!;
        if (!cachedItem) return notFound();
        const { download_url, content } = cachedItem;
        if (content != null) return content;

        if (USE_DUMMY_SOURCE) {
            // Dummy content for testing
            const dummyContent = dummyContents.find(d => d.slug === slug)?.content || '# Not Found\n\nThe requested specification section does not exist.';
            cache.set(slug, { download_url, content: dummyContent });
            return dummyContent;
        } else {
            // Try to fetch and  cache file info if not present
            const res = await fetch(download_url);
            if (!res.ok) throw new Error('Failed to fetch file info from GitHub');
            const markdownContent = await res.json();
            cache.set(slug, { download_url, content: markdownContent });
            return markdownContent;
        }
    }
}

// Page component
export default async function SpecPage({ params }) {
    const { slug } = await params
    const content = await fetchMarkdownBySlug(slug);
    return <MDXRemote source={content} />;
}

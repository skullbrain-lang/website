// app/spec/data.ts

import 'server-only'; // Ensure this file only runs on the server
import { GITHUB_OWNER, GITHUB_SPEC_REPO, GITHUB_SPEC_PATH, USE_DUMMY_SPEC_SOURCE, formatAndCapitalize } from '@/lib/utils';

const DUMMY_SPEC_SOURCE_ARRAY = [
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

const DUMMY_SPEC_SOURCE_MAP = new Map(
    DUMMY_SPEC_SOURCE_ARRAY.map(entry => [entry.slug, entry])
);
export type SpecificationData = Map<string, SpecificationInfo>;

export type SpecificationInfo = {
    label: string;
    download_url: string;
};

const fetchFilesFromGithub = async (): Promise<(SpecificationInfo & { slug: string })[]> => {
    const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_SPEC_REPO}/contents/${GITHUB_SPEC_PATH}`;
    const res = await fetch(GITHUB_API_URL);

    if (!res.ok) throw new Error('Failed to fetch files from GitHub');

    const json: Array<any> = await res.json();
    return json
        .filter((file: any) => file.name.endsWith('.md'))
        .map((file: any) => ({
            download_url: file.download_url,
            label: formatAndCapitalize(file.name.replace(/\.md$/, '')),
            slug: file.name.replace(/\.md$/, '')
        }));
};


export async function getSpecificationData(): Promise<SpecificationData> {
    let data = new Map()

    if (USE_DUMMY_SPEC_SOURCE) {
        DUMMY_SPEC_SOURCE_ARRAY.forEach(file => {
            data.set(file.slug, {
                download_url: '',
                label: formatAndCapitalize(file.slug)
            })
        })

        return data
    }

    const files = await fetchFilesFromGithub();

    // 1. Process files to extract sorting and key data
    const processedFiles = files.map(file => {
        // Regex to match "chapter_N_name" and capture N (the number) and 'name'
        // file.slug is the full name, e.g., "chapter_05_introduction"
        const match = file.slug.match(/^chapter_(\d+)_(.*)$/i);

        // Extract the number (for sorting) and the base name (for the Map key and label)
        const chapterNumber = match ? parseInt(match[1], 10) : Infinity;
        const baseName = match ? match[2] : file.slug;

        return {
            ...file,
            chapterNumber,
            baseName,
        };
    });

    // 2. Sort the files numerically by chapterNumber
    processedFiles.sort((a, b) => a.chapterNumber - b.chapterNumber);

    // 3. Populate the Map using baseName as the key
    processedFiles.forEach(file => {
        data.set(file.baseName, { // Use file.baseName as the key ($name)
            download_url: file.download_url,
            label: file.label
        });
    });
    
    return data
}



// Function to get a single content source (the markdown string)
export async function getMarkdownSource(slug: string): Promise<string> {
    const specData = await getSpecificationData();

    const fileInfo = specData.get(slug)!
    if (USE_DUMMY_SPEC_SOURCE) {
        return DUMMY_SPEC_SOURCE_MAP.get(slug)!.content
    }
    
    // Fetch the content from the download_url
    const contentRes = await fetch(fileInfo.download_url);
    if (!contentRes.ok) {
        throw new Error(`Failed to fetch content for ${slug}`);
    }

    return contentRes.text()

}
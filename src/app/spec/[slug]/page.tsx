
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getMarkdownSource } from '../data';

export default async function SpecPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const source = await getMarkdownSource(slug); 
    return <MDXRemote source={source} />;
}
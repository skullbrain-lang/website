
import { MDXRemote, MDXRemoteOptions } from 'next-mdx-remote-client/rsc'
import { getMarkdownSource } from '../data';
import remarkGfm from 'remark-gfm'

export default async function SpecPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const source = await getMarkdownSource(slug); 

    const options: MDXRemoteOptions = {
        mdxOptions: {
          remarkPlugins: [
             remarkGfm
          ], 
        },
    };

    return <MDXRemote source={source} options={options}/>;
}
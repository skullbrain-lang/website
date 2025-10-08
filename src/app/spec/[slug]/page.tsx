
import { MDXRemote, MDXRemoteOptions } from 'next-mdx-remote-client/rsc'
import { getMarkdownSource, getSpecificationData } from '../data';
import remarkGfm from 'remark-gfm'

export async function generateStaticParams() {
  const specDataMap = await getSpecificationData();
  const slugs = Array.from(specDataMap.keys());

  return slugs.map((key) => ({
    slug: key,
  }));
}

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

    return (
      <div className="prose dark:prose-invert">
        <MDXRemote source={source} options={options}/>
      </div>
    );
}
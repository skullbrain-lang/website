import "@/app/globals.css";

import Layout from "@/components/Layout";
import Head from "next/head";

export default function Skullbrain({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>💀🧠 SkullBrain - The Ultimate Meme Programming Language</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Aarav Shah"/>
        <meta name="description" content="💀🧠 SkullBrain is the ultimate brainrot meme programming language. Explore our docs, and try our online editor!"/>
        <meta name="keywords" content="skullbrain, programming language, meme, esolang, esoteric, brainrot, software" />
      </Head>

      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
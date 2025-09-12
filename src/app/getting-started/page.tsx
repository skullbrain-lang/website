// website/app/getting-started/page.js
import { GettingStartedContent } from "@/app/getting-started/content";
import getDocuments from "./build";

// This is the main page component using the App Router pattern
export default async function GettingStartedPage() {
    const docs = await getDocuments();

    return <GettingStartedContent docs={docs} />;
}
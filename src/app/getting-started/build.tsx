import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import humanizeString from 'humanize-string';

type DocumentList = {
  hierarchical: any[];
  flat: any[];
}

export type {
  DocumentList
}
// Enhanced data fetching function that handles nested directories
export default async function getDocuments() : Promise<DocumentList> {
  // Path to docs folder from the website directory (going up one level then to docs)
  const docsDirectory = path.join(process.cwd(), '..', 'docs');

  // Get all files from the getting-started directory within docs
  const gettingStartedDir = path.join(docsDirectory, 'getting-started');

  try {
    // Function to recursively get documents from a directory and its subdirectories
    const getDocsFromDir: any = (dirPath: string, parentPath = '') => {
      const files = fs.readdirSync(dirPath, { withFileTypes: true });

      const results = [];

      for (const file of files) {
        const fullPath = path.join(dirPath, file.name);

        if (file.isDirectory()) {
          // Extract the directory name for the category
          const dirName = file.name;
          const dirSlug = parentPath ? `${parentPath}/${dirName}` : dirName;

          // Format the category name from directory name (convert kebab-case to title case)
          const categoryName = dirName
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

          // Get documents from subdirectory
          const subdirDocs = getDocsFromDir(fullPath, dirSlug);

          // Add the category information
          if (subdirDocs.length > 0) {
            results.push({
              isCategory: true,
              title: categoryName,
              slug: dirSlug,
              items: subdirDocs
            });
          }
        } else if (file.name.endsWith('.md')) {
          const fileContents = fs.readFileSync(fullPath, 'utf8');

          // Use gray-matter to parse the doc metadata and content
          const { data, content } = matter(fileContents);

          // Extract order number from filename (e.g., "1_intro.md" → order = 1)
          const orderMatch = file.name.match(/^(\d+)_/);
          const fileOrder = orderMatch ? parseInt(orderMatch[1], 10) : 999;

          // Create slug from filename without order prefix and extension
          const slug = file.name.replace(/^\d+_/, '').replace('.md', '');
          const fullSlug = parentPath ? `${parentPath}/${slug}` : slug;

          results.push({
            isCategory: false,
            slug: fullSlug,
            title: humanizeString((data.title || slug.replace(/-/g, ' ')).toLowerCase()),
            // Use order from frontmatter if available, otherwise use filename order
            order: data.order || fileOrder,
            content
          });
        }
      }

      // Sort items by order
      results.sort((a, b) => a.order - b.order);
      return results;
    };

    // Get all docs including those in nested directories
    const allDocs = getDocsFromDir(gettingStartedDir);

    // Flatten the structure for easier navigation while preserving hierarchy information
    const flattenDocs : any = (docs: [any], level = 0, parentCategory = null) => {
      let flattened = [];

      for (const doc of docs) {
        if (doc.isCategory) {
          // Add the category as a non-clickable header
          flattened.push({
            ...doc,
            level,
            parentCategory,
            items: undefined // Remove items to avoid duplication
          });

          // Add all items in the category
          flattened = flattened.concat(
            flattenDocs(doc.items, level + 1, doc.slug)
          );
        } else {
          // Add regular document with level information
          flattened.push({
            ...doc,
            level,
            parentCategory
          });
        }
      }

      return flattened;
    };

    return {
      hierarchical: allDocs,
      flat: flattenDocs(allDocs)
    };
  } catch (error) {
    console.error('Error reading documentation files:', error);
    return {
      hierarchical: [],
      flat: []
    };
  }
}
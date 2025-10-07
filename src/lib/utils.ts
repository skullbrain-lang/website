import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/**
 * Transforms a string to have only the first character capitalized,
 * and converts the rest to lowercase, replacing underscores with spaces.
 *
 * @param text The input string (e.g., "MY_AWESOME_STRING").
 * @returns The transformed string (e.g., "My awesome string").
 */
export function formatAndCapitalize(text: string): string {
    if (!text) {
        return '';
    }

    // 1. Replace underscores (_) with spaces.
    const withSpaces = text.replace(/_/g, ' ');

    // 2. Ensure the entire string is lower case.
    const lowercased = withSpaces.toLowerCase();

    // 3. Capitalize the first character and append the rest of the string.
    // charAt(0).toUpperCase() gets the first char and capitalizes it.
    // slice(1) gets the rest of the string from the second character onwards.
    const result = lowercased.charAt(0).toUpperCase() + lowercased.slice(1);

    return result;
}

export const GITHUB_OWNER = 'skullbrain-lang';
export const GITHUB_SPEC_REPO = 'reference';
export const GITHUB_SPEC_PATH = 'src'; // flder in repo



export const USE_DUMMY_SPEC_SOURCE = false;

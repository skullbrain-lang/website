import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import * as changeCase from "change-case";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatAndCapitalize(text: string): string {
    return changeCase.capitalCase(text)
}


export const USE_DUMMY_SPEC_SOURCE = false;

export const GITHUB_OWNER = 'skullbrain-lang';
export const GITHUB_SPEC_REPO = 'reference';
export const GITHUB_SPEC_PATH = 'src'; 
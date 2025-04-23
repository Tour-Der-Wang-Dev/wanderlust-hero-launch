import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Validate and format Thai file names
 * - Remove any non-Thai characters
 * - Limit to 50 characters
 * - Props: filename: string, language: 'th'
 * - Returns: { filename: string; error: string | null }
 */
export function validateAndFormatThaiFilename({
  filename,
  language,
}: {
  filename: string;
  language: "th";
}): { filename: string; error: string | null } {
  let error: string | null = null;
  if (language !== "th") {
    error = "Only Thai language is supported.";
    return { filename: "", error };
  }
  // Thai unicode range: \u0E00-\u0E7F
  let formatted = filename.replace(/[^\u0E00-\u0E7F]/g, "");
  if (formatted.length === 0) {
    error = "The filename must contain at least one Thai character.";
  }
  if (formatted.length > 50) {
    formatted = formatted.slice(0, 50);
    error = "Filename truncated to 50 Thai characters.";
  }
  return { filename: formatted, error };
}

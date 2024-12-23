export function getLeetCodeUrl(questionTitle: string): string {
    // Convert the question title to lowercase
    const lowercaseTitle = questionTitle.toLowerCase();
    
    // Replace spaces and special characters with hyphens
    const urlSlug = lowercaseTitle.replace(/[^a-z0-9]+/g, '-');
    
    // Remove leading and trailing hyphens
    const cleanSlug = urlSlug.replace(/^-+|-+$/g, '');
    
    // Construct the full URL
    return `https://leetcode.com/problems/${cleanSlug}/description/`;
  }
  
  
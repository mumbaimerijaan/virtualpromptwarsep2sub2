import DOMPurify from 'dompurify';

/**
 * Sanitizes an HTML string to prevent XSS.
 * @param html The dirty HTML string.
 * @returns The clean HTML string.
 */
export function sanitizeHTML(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'ol', 'li'],
    ALLOWED_ATTR: ['href', 'target', 'rel']
  });
}

/**
 * Sanitizes a plain text string.
 * @param text The dirty text.
 * @returns The clean text.
 */
export function sanitizeText(text: string): string {
  if (!text) return '';
  return text.replace(/[<>]/g, '');
}

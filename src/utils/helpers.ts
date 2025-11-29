/**
 * Utility functions for the application
 */

/**
 * Scroll to top of page smoothly
 */
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} Success status
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error("Failed to copy:", error);
    return false;
  }
}

/**
 * Format WhatsApp link
 * @param {string} number - Phone number
 * @returns {string} WhatsApp URL
 */
export function formatWhatsAppLink(number: string): string {
  return `https://wa.me/${number.replace(/\D/g, "")}`;
}

/**
 * Create mailto link with subject and body
 * @param {string} email - Email address
 * @param {string} subject - Email subject
 * @param {string} body - Email body
 * @returns {string} Mailto URL
 */
export function createMailtoLink(
  email: string,
  subject: string,
  body: string
): string {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
}

export const honeypotCheck = (formData) => {
  // Check if the honeypot field is filled (indicates bot)
  const honeypot = formData.get('botcheck');
  return honeypot && honeypot !== '';
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  // Check if it's a valid length (8-15 digits)
  return cleaned.length >= 8 && cleaned.length <= 15;
};

export const sanitizeInput = (input) => {
  // Remove any HTML tags
  return input.replace(/<[^>]*>/g, '');
};

export const rateLimit = (() => {
  const submissions = new Map();
  const LIMIT = 3; // Max submissions
  const WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

  return (identifier) => {
    const now = Date.now();
    const userSubmissions = submissions.get(identifier) || [];
    
    // Filter out old submissions
    const recentSubmissions = userSubmissions.filter(
      time => now - time < WINDOW
    );
    
    if (recentSubmissions.length >= LIMIT) {
      return false; // Rate limit exceeded
    }
    
    recentSubmissions.push(now);
    submissions.set(identifier, recentSubmissions);
    return true; // Allow submission
  };
})();

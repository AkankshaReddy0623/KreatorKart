/**
 * @author ChebroluVirajith
 * @lastModified 2025-07-24 19:24:30
 * Utility functions for Google Form ID handling
 */

export const createTestSubmission = (formId: string) => {
  // Create a form submission URL with test data
  const testData = {
    'Email': 'test@example.com',
    'Password': 'testpassword123',
    'Name': 'Test User',
    'Username': 'testuser',
    'Bio': 'Test bio',
    'Instagram Profile': 'test_instagram',
    'YouTube Channel': 'test_youtube',
    'TikTok Profile': 'test_tiktok'
  };

  // Base form URL
  const baseUrl = `https://docs.google.com/forms/d/e/${formId}/viewform`;
  
  return baseUrl;
};

export const validateFormId = (formId: string): boolean => {
  // Basic validation for Google Form ID format
  return /^[a-zA-Z0-9_-]{20,}$/.test(formId);
};
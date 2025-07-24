import { UserFormData, UserData } from '../types/auth';
import { FormConfig } from '../types/form';

/**
 * @author ChebroluVirajith
 * @lastModified 2025-07-24 19:30:01
 */

// Get form configuration
const formConfig = localStorage.getItem('formConfig');
const config: FormConfig = formConfig ? JSON.parse(formConfig) : {
  formId: '',
  fields: []
};

// Helper function to hash password
const hashPassword = async (password: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};

export const submitToGoogleForm = async (data: UserFormData): Promise<boolean> => {
  try {
    if (!config.formId) {
      throw new Error('Form ID not configured');
    }

    const formData = new FormData();
    
    // Hash the password before sending
    const hashedPassword = await hashPassword(data.password);
    
    // Add form fields based on configuration
    config.fields.forEach(field => {
      if (field.type === 'password') {
        formData.append(field.entryId, hashedPassword);
      } else {
        const value = data[field.name as keyof UserFormData];
        if (value) {
          formData.append(field.entryId, value.toString());
        }
      }
    });

    const response = await fetch(
      `https://docs.google.com/forms/d/${config.formId}/formResponse`,
      {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      }
    );

    return true;
  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
};

export const validateCredentials = async (email: string, password: string): Promise<UserData | null> => {
  try {
    const hashedPassword = await hashPassword(password);
    
    // Since we can't directly query Google Forms for verification,
    // we'll need to implement an alternative authentication method
    // For now, we'll store the user data locally after successful form submission
    
    const storedUser = localStorage.getItem(`user_${email}`);
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      if (userData.passwordHash === hashedPassword) {
        return {
          email: userData.email,
          name: userData.name,
          username: userData.username,
          bio: userData.bio,
          socialLinks: userData.socialLinks
        };
      }
    }
    
    return null;
  } catch (error) {
    console.error('Error validating credentials:', error);
    return null;
  }
};

export const checkEmailExists = async (email: string): Promise<boolean> => {
  try {
    // Check if user exists in local storage
    return !!localStorage.getItem(`user_${email}`);
  } catch (error) {
    console.error('Error checking email:', error);
    return false;
  }
};
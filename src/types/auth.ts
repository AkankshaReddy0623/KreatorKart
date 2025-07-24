/**
 * @author ChebroluVirajith
 * @lastModified 2025-07-24 19:30:01
 */

export interface UserFormData {
  email: string;
  password: string;
  name: string;
  username: string;
  bio?: string;
  socialLinks?: {
    instagram?: string;
    youtube?: string;
    tiktok?: string;
  };
}

export interface UserData {
  email: string;
  name: string;
  username: string;
  bio?: string;
  socialLinks?: {
    instagram?: string;
    youtube?: string;
    tiktok?: string;
  };
}
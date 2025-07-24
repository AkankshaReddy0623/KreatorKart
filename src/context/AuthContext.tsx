import React, { createContext, useContext, useState, useEffect } from 'react';
import { submitToGoogleForm, validateCredentials } from '../services/googleForms';
import { UserData, UserFormData } from '../types/auth';

/**
 * @author ChebroluVirajith
 * @lastModified 2025-07-24 18:41:25
 */

interface AuthContextType {
  user: UserData | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (userData: UserFormData) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const userData = await validateCredentials(email, password);
      if (userData) {
        const userToStore: UserData = {
          email: userData.email,
          name: userData.name,
          username: userData.username,
          bio: userData.bio,
          socialLinks: userData.socialLinks
        };
        localStorage.setItem('user', JSON.stringify(userToStore));
        setUser(userToStore);
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const signup = async (userData: UserFormData) => {
    try {
      const success = await submitToGoogleForm(userData);
      if (success) {
        const userToStore: UserData = {
          email: userData.email,
          name: userData.name,
          username: userData.username,
          bio: userData.bio,
          socialLinks: userData.socialLinks
        };
        localStorage.setItem('user', JSON.stringify(userToStore));
        setUser(userToStore);
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useAuth } from '../context/AuthContext';

/**
 * @author ChebroluVirajith
 * @lastModified 2025-07-24 18:21:02
 * Sign up modal component
 */

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    username: '',
    bio: '',
    socialLinks: {
      instagram: '',
      youtube: '',
      tiktok: ''
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const success = await signup(formData);
      if (success) {
        onClose();
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-background glass">
        <DialogHeader>
          <DialogTitle className="text-gradient">Sign Up for KreatorKart</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input 
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="glass"
            />
          </div>
          <div>
            <Input 
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="glass"
            />
          </div>
          <div>
            <Input 
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="glass"
            />
          </div>
          <div>
            <Input 
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
              className="glass"
            />
          </div>
          <div>
            <Input 
              type="text"
              placeholder="Bio (optional)"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="glass"
            />
          </div>
          <div>
            <Input 
              type="text"
              placeholder="Instagram Profile (optional)"
              value={formData.socialLinks.instagram}
              onChange={(e) => setFormData({
                ...formData,
                socialLinks: { ...formData.socialLinks, instagram: e.target.value }
              })}
              className="glass"
            />
          </div>
          <div>
            <Input 
              type="text"
              placeholder="YouTube Channel (optional)"
              value={formData.socialLinks.youtube}
              onChange={(e) => setFormData({
                ...formData,
                socialLinks: { ...formData.socialLinks, youtube: e.target.value }
              })}
              className="glass"
            />
          </div>
          <div>
            <Input 
              type="text"
              placeholder="TikTok Profile (optional)"
              value={formData.socialLinks.tiktok}
              onChange={(e) => setFormData({
                ...formData,
                socialLinks: { ...formData.socialLinks, tiktok: e.target.value }
              })}
              className="glass"
            />
          </div>
          <Button
            type="submit"
            className="w-full gradient-neon text-white hover:scale-105 transition-transform duration-300"
          >
            Sign Up
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpModal;
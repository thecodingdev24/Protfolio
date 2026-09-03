import React, { useState, useEffect } from 'react';
import { PROFILE } from '../data';

interface ProfileImageProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const ProfileImage: React.FC<ProfileImageProps> = ({
  className = '',
}) => {
  const [imageSrc, setImageSrc] = useState<string>(() => {
    return localStorage.getItem('portfolio_user_photo') || '/profile.jpg';
  });

  useEffect(() => {
    // Check if /profile.jpg or /profile.png exists, otherwise fallback to /avatar.svg
    const testImg = new Image();
    testImg.src = localStorage.getItem('portfolio_user_photo') || '/profile.jpg';
    testImg.onerror = () => {
      const testPng = new Image();
      testPng.src = '/profile.png';
      testPng.onload = () => setImageSrc('/profile.png');
      testPng.onerror = () => {
        if (!localStorage.getItem('portfolio_user_photo')) {
          setImageSrc('/avatar.svg');
        }
      };
    };
  }, []);

  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      {/* Permanent Profile Portrait */}
      <img
        src={imageSrc}
        alt={PROFILE.name}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        onError={() => {
          if (imageSrc !== '/avatar.svg') {
            setImageSrc('/avatar.svg');
          }
        }}
      />
    </div>
  );
};

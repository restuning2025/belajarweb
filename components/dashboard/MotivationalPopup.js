import React, { useState, useEffect } from 'react';

export default function MotivationalPopup({ message, type = 'success', onClose }) {
  const [isVisible, setIsVisible] = useState(true);
  const [character, setCharacter] = useState('🐼');
  
  // Different characters for different message types
  const characters = {
    success: ['🦊', '🐶', '🐱', '🐼', '🦁'],
    error: ['🐢', '🐰', '🦉'],
    warning: ['🐵', '🦒', '🦝'],
    info: ['🐨', '🐻', '🐧']
  };
  
  // Animations for popup entrance
  const animations = ['bounce', 'fadeIn', 'slideIn', 'pop'];
  const [animation, setAnimation] = useState('bounce');
  
  // Colors for different types
  const colors = {
    success: 'from-green-400 to-emerald-500',
    error: 'from-red-400 to-pink-500',
    warning: 'from-yellow-400 to-amber-500',
    info: 'from-blue-400 to-indigo-500'
  };
  
  useEffect(() => {
    // Select a random character based on type
    const typeCharacters = characters[type] || characters.success;
    const randomCharacter = typeCharacters[Math.floor(Math.random() * typeCharacters.length)];
    setCharacter(randomCharacter);
    
    // Select a random animation
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    setAnimation(randomAnimation);
    
    // Auto-close after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onClose) onClose();
      }, 500); // Allow time for closing animation
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [message, type, onClose]);
  
  if (!isVisible) {
    return null;
  }
  
  // Add animation classes based on the random selection
  let animationClass = 'animate-bounce';
  if (animation === 'fadeIn') animationClass = 'animate-fadeIn';
  else if (animation === 'slideIn') animationClass = 'animate-slideIn';
  else if (animation === 'pop') animationClass = 'animate-pop';
  
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className={`bg-gradient-to-r ${colors[type]} text-white p-4 rounded-2xl shadow-lg max-w-xs ${animationClass}`}>
        <div className="flex items-start">
          <div className="text-3xl mr-3 animate-bounce">{character}</div>
          <div className="flex-1">
            <p className="font-bold text-lg">{message}</p>
          </div>
          <button 
            onClick={() => {
              setIsVisible(false);
              if (onClose) onClose();
            }}
            className="text-white ml-2 opacity-70 hover:opacity-100 transition-opacity"
          >
            ✕
          </button>
        </div>
        
        <div className="w-full bg-white/20 rounded-full h-1 mt-4">
          <div 
            className="bg-white h-1 rounded-full animate-shrink"
            style={{ animationDuration: '5s' }}
          ></div>
        </div>
      </div>
    </div>
  );
}

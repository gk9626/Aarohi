import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FloatingPanicButton: React.FC = () => {
  const [isPressed, setIsPressed] = useState(false);
  const { t } = useLanguage();

  const handlePanicClick = async () => {
    setIsPressed(true);

    // Show audio modal
    const audioModal = document.getElementById('audio-modal');
    if (audioModal) {
      audioModal.classList.remove('hidden');
    }

    // Call emergency backend
    try {
      const response = await fetch('http://localhost:5000/api/trigger-emergency', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      const data = await response.json();
      if (data.status === 'success') {
        alert(data.message);
      } else {
        alert('Something went wrong. Try again.');
      }
    } catch (error) {
      console.error('Emergency trigger failed:', error);
      alert('Failed to send emergency alert.');
    }

    // Reset animation state
    setTimeout(() => setIsPressed(false), 300);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handlePanicClick}
        className={`w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 animate-pulse-slow ${
          isPressed ? 'scale-110' : 'hover:scale-105'
        }`}
      >
        <div className="flex items-center justify-center">
          <Shield className="w-8 h-8 text-white" />
        </div>
      </button>

      {/* Tooltip Label */}
      <div className="absolute -top-12 right-0 bg-black/80 text-white px-3 py-1 rounded-lg text-xs font-medium opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
        {t ? t('panic.button') : 'SafeMe'}
      </div>
    </div>
  );
};

export default FloatingPanicButton;

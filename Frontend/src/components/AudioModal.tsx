import React, { useState, useRef } from 'react';
import { X, Play, Pause, Volume2, Phone } from 'lucide-react';

const AudioModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const audioOptions = [
    {
      id: 'calming',
      title: 'Calming Voice',
      description: 'Soothing voice to help you stay calm',
      color: 'bg-blue-500',
      icon: '🧘‍♀️'
    },
    {
      id: 'siren',
      title: 'Police Siren',
      description: 'Alert sound to scare away danger',
      color: 'bg-red-500',
      icon: '🚨'
    },
    {
      id: 'alert',
      title: 'Alert Message',
      description: 'Emergency alert message',
      color: 'bg-orange-500',
      icon: '📢'
    },
    {
      id: 'music',
      title: 'Soft Music',
      description: 'Peaceful music for relaxation',
      color: 'bg-green-500',
      icon: '🎵'
    }
  ];

  React.useEffect(() => {
    const handlePanicButton = () => {
      setIsOpen(true);
    };

    // Listen for panic button clicks
    window.addEventListener('panic-button-clicked', handlePanicButton);
    
    return () => {
      window.removeEventListener('panic-button-clicked', handlePanicButton);
    };
  }, []);

  const playAudio = (audioId: string) => {
    if (currentAudio === audioId && isPlaying) {
      setIsPlaying(false);
      audioRef.current?.pause();
    } else {
      setCurrentAudio(audioId);
      setIsPlaying(true);
      // In a real app, you would load the actual audio file here
      console.log(`Playing ${audioId} audio`);
    }
  };

  const callEmergency = () => {
    window.open('tel:100', '_self');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Emergency Audio</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 mb-6">
          {audioOptions.map((audio) => (
            <button
              key={audio.id}
              onClick={() => playAudio(audio.id)}
              className={`w-full p-4 rounded-lg border-2 transition-all duration-200 ${
                currentAudio === audio.id
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 ${audio.color} rounded-full flex items-center justify-center text-white text-xl`}>
                  {audio.icon}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-gray-800">{audio.title}</h3>
                  <p className="text-sm text-gray-600">{audio.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {currentAudio === audio.id && isPlaying ? (
                    <Pause className="w-5 h-5 text-purple-600" />
                  ) : (
                    <Play className="w-5 h-5 text-purple-600" />
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="flex space-x-3">
          <button
            onClick={callEmergency}
            className="flex-1 bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>Call 100</span>
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="flex-1 bg-gray-500 text-white py-3 px-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Close
          </button>
        </div>

        <audio ref={audioRef} />
      </div>
    </div>
  );
};

export default AudioModal;
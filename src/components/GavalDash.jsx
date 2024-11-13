// src/components/GavalDash.jsx
import React, { useState, useCallback, useEffect } from 'react';
import { Volume2 } from 'lucide-react';
import Logo from './Logo';
import DrumControls from './DrumControls';
import { useKeyPress } from '../hooks/useKeyPress';

const GavalDash = () => {
  const [leftHandActive, setLeftHandActive] = useState(false);
  const [rightHandActive, setRightHandActive] = useState(false);
  const [leftSparkActive, setLeftSparkActive] = useState(false);
  const [rightSparkActive, setRightSparkActive] = useState(false);
  const [volume, setVolume] = useState(true);

  const ANIMATION_DURATION = 250; // Increased duration
  const SPARK_DURATION = 300;

  // Initialize audio
  const drumSounds = {
    w: new Audio('/sounds/drum-1.mp3'),
    a: new Audio('/sounds/drum-2.mp3'),
    s: new Audio('/sounds/drum-3.mp3'),
    d: new Audio('/sounds/drum-4.mp3')
  };

  useEffect(() => {
    Object.values(drumSounds).forEach(sound => {
      sound.volume = volume ? 1 : 0;
    });
  }, [volume]);

  const playDrum = useCallback((key) => {
    if (drumSounds[key]) {
      drumSounds[key].currentTime = 0;
      drumSounds[key].play();
    }
    
    if (key === 'w' || key === 'a') {
      setLeftHandActive(true);
      setLeftSparkActive(true);
      setTimeout(() => setLeftHandActive(false), ANIMATION_DURATION);
      setTimeout(() => setLeftSparkActive(false), SPARK_DURATION);
    } else if (key === 's' || key === 'd') {
      setRightHandActive(true);
      setRightSparkActive(true);
      setTimeout(() => setRightHandActive(false), ANIMATION_DURATION);
      setTimeout(() => setRightSparkActive(false), SPARK_DURATION);
    }
  }, []);

  useKeyPress('w', () => playDrum('w'));
  useKeyPress('a', () => playDrum('a'));
  useKeyPress('s', () => playDrum('s'));
  useKeyPress('d', () => playDrum('d'));

  return (
    <div 
      className="h-screen w-full relative overflow-hidden"
      style={{
        backgroundColor: '#0A192F',
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Logo />
      <DrumControls />

      {/* Main Content */}
      <div className="relative h-full flex flex-col items-center justify-end pb-20">
        {/* Main Stone */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-20xl">
          <img 
            src="/images/stone.png" 
            alt="Gaval Stone" 
            className="w-full h-auto"
          />
        </div>

        {/* Hands Container */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl flex justify-between px-32"> {/* Increased px spacing */}
          {/* Left Hand */}
          <div className="relative">
            <div 
              className={`transform ${leftHandActive ? 'translate-y-12' : 'translate-y-0'} transition-all duration-250 ease-in-out`}
            >
              <img 
                src="/images/left-hand.png" 
                alt="Left Hand" 
                style={{
                  filter: 'drop-shadow(0 0 12px rgba(0,0,0,0.4))',
                  width: '60rem'
                }}
              />
            </div>
            {/* Left Hand Spark Effect */}
            {leftSparkActive && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="animate-spark">
                  <div className="w-16 h-16 rounded-full bg-yellow-200 opacity-75 animate-ping" />
                  <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-orange-300 animate-pulse" />
                </div>
              </div>
            )}
          </div>

          {/* Right Hand */}
          <div className="relative">
            <div 
              className={`transform ${rightHandActive ? 'translate-y-12' : 'translate-y-0'} transition-all duration-250 ease-in-out`}
            >
              <img 
                src="/images/right-hand.png" 
                alt="Right Hand" 
                style={{
                  transform: 'scaleX(1)',
                  filter: 'drop-shadow(0 0 12px rgba(0,0,0,0.4))',
                  width: '60rem'
                }}
              />
            </div>
            {/* Right Hand Spark Effect */}
            {rightSparkActive && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="animate-spark">
                  <div className="w-16 h-16 rounded-full bg-yellow-200 opacity-75 animate-ping" />
                  <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-orange-300 animate-pulse" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Volume Icon */}
      <button 
        className="absolute bottom-4 right-4 text-white hover:text-gray-300 transition-colors"
        onClick={() => setVolume(!volume)}
      >
        <Volume2 
          size={24} 
          className={volume ? '' : 'opacity-50'}
        />
      </button>
    </div>
  );
};

export default GavalDash;
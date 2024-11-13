// src/components/DrumControls.jsx
import React from 'react';

const DrumControls = () => {
  return (
    <div className="absolute top-4 right-4 text-white">
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="col-start-2">
          <div className="border rounded p-2 bg-gray-800">W</div>
        </div>
        <div className="col-span-3 grid grid-cols-3 gap-2">
          <div className="border rounded p-2 bg-gray-800">A</div>
          <div className="border rounded p-2 bg-gray-800">S</div>
          <div className="border rounded p-2 bg-gray-800">D</div>
        </div>
      </div>
      <div className="text-center mt-2 text-sm">TO PLAY USE THESE KEYS</div>
    </div>
  );
};

export default DrumControls;
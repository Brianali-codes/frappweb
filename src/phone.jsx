import React from 'react';

const PhoneLayout = ({ imageUrl }) => {
  return (
    <div className="flex items-center justify-center h-fit trans bg-transparent">
      <div className="relative border-8 border-black rounded-3xl shadow-lg bg-transparent glow-border">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-lg z-10"></div>

        {/* Side Button (rotated 180 degrees and outside the bezel) */}
        <div className="absolute top-1/3 right-[-10px] transform -translate-y-1/2 rotate-180 w-1 h-24 bg-gray-700 rounded-l-lg"></div>
        <div className="absolute top-1/2 right-[-10px] transform -translate-y-1/2 rotate-180 w-1 h-12 bg-gray-700 rounded-l-lg"></div>

        {/* Phone Screen */}
        <div className="w-full h-full overflow-hidden rounded-2xl">
          <img src={imageUrl} alt="Phone Display" className="w-full h-full object-cover" />
        </div>

        {/* iPhone-style Bottom Navigation Bar */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white rounded-full opacity-50 z-20">
          {/* Empty div to simulate the bottom bar */}
        </div>
      </div>
    </div>
  );
};


export default PhoneLayout;

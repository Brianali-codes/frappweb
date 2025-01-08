import React from 'react';

const DownloadAPKButton = () => {
  return (
    <div className="flex justify-center items-center">
      <a 
        href="https://github.com/Brianali-codes/Frapp/releases/download/Frappv1.0.4/FrappV1.0.4.apk"  // Replace with your APK file path
        download
        
      >
        <button className="bg-white rounded-2xl p-3 hover:bg-gray-400 kanit">
            Download APK
        </button>
      </a>
    </div>
  );
};

export default DownloadAPKButton;

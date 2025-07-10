import React, { useState, useEffect } from 'react';
import { Star, Award } from 'lucide-react';

const Hero = () => {
  // State to track if video has loaded
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Handle video loaded event
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Fallback background while video loads */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-800 to-purple-900 z-0"></div>
      
      {/* Video Background */}
      <video 
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 brightness-125 contrast-110 saturate-125 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        autoPlay 
        loop 
        muted 
        playsInline
        onLoadedData={handleVideoLoaded}
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay - Reduced opacity for better video visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/70 to-black/50 z-20"></div>
      
      {/* Content Overlay */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 text-slate-900 text-xs sm:text-sm font-bold px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 md:mb-8 shadow-lg transform hover:scale-105 transition-all duration-300">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="text-center leading-tight">
              DESIGNED FOR THE NEWEST GMAT FOCUS EDITION
            </span>
            <Award className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
          </div>
          
          {/* Main Heading with gradient text */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 md:mb-8 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Elite GMAT Training for Future Leaders
            </span>
          </h1>
          
          {/* Subheading with Stars */}
          <div className="flex flex-col items-center mb-6 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-0.5 sm:gap-1 mb-2 sm:mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 font-light px-2">
              The Premier Online GMAT Preparation Experience
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="mb-4 sm:mb-6 px-4 sm:px-0">
            <a 
              href="#" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg transition-colors duration-300 block w-full sm:w-auto sm:inline-block shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              5-DAY FULL ACCESS TRIAL FOR FREE
            </a>
            <p className="text-xs sm:text-sm mt-2 text-gray-300">No automatic billing</p>
          </div>
          
          {/* Score Guarantee */}
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700 inline-block">
            <p className="text-base sm:text-lg md:text-xl font-semibold px-2">
              <span className="text-lg sm:text-xl md:text-2xl font-bold">130-POINT</span> SCORE IMPROVEMENT <span className="font-bold">GUARANTEE</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
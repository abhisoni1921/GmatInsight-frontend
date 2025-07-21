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
    <div className="relative h-[80vh] w-full overflow-hidden">
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
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-3 sm:px-4 lg:px-6">
        <div className="max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 text-slate-900 text-xs sm:text-sm font-bold px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="text-center leading-tight">
              Tailored for the Latest GMAT Focus/GRE Adaptive Edition
            </span>
            <Award className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
          </div>
          
          {/* Main Heading with gradient text - Reduced sizes */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Premier GMAT & GRE Coaching for Aspiring Global Leaders
            </span>
          </h1>
          
          {/* Subheading with Stars */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-0.5 sm:gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 font-light px-2">
              The Gold Standard in AI driven Online GMAT & GRE Preparation
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="px-4 sm:px-0">
            <a 
              href="#" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-md text-sm sm:text-base md:text-lg transition-colors duration-300 block w-full sm:w-auto sm:inline-block shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get 2 Days of Full Access — Absolutely FREE
            </a>
            <p className="text-xs sm:text-sm mt-1.5 text-gray-300">No automatic billing</p>
          </div>
          
          {/* Score Guarantee */}
          <div className="pt-3 sm:pt-4 md:pt-5 border-t border-gray-700 inline-block">
            <p className="text-sm sm:text-base md:text-lg font-semibold px-2">
              <span className="text-base sm:text-lg md:text-xl font-bold">GUARANTEED</span> SCORE IMPROVEMENT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
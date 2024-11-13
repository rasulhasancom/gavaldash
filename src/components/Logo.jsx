// src/components/Logo.jsx
import React from 'react';

const Logo = () => {
  return (
    <div className="absolute top-4 left-4 flex flex-col items-start gap-3">
      {/* PNG Logo */}
      <img 
        src="/images/logo.png" 
        alt="Gaval Dash Logo" 
        className="w-48 h-auto hover:opacity-90 transition-opacity duration-200"
      />

      {/* External About Link */}
      <a 
        href="https://www.elibrary.az/docs/jurnal/jrn2008_947j.htm" 
        target="_blank"  // Opens in new tab
        rel="noopener noreferrer"  // Security best practice for external links
        className="text-gray-400 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
      >
        <span className="inline-block w-4 h-[1px] bg-current transform origin-left group-hover:scale-x-150 transition-transform"></span>
        ABOUT GAVAL DASH
        {/* Optional: Add external link icon */}
        <svg 
          className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>
    </div>
  );
};

export default Logo;
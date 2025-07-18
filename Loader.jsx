import React from 'react';

export function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0f1113] bg-opacity-90 z-50">
      <div className="flex flex-col items-center gap-4">
        {/* Loader Animation */}
        <div className="w-16 h-16 rounded-full border-4 border-t-transparent border-[#00ffa0] animate-spin"></div>

        {/* Loading Text */}
        <p className="text-[#00ffa0] text-lg font-medium tracking-wider animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}

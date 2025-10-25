import React from "react";
import { Sparkles } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-[#0a0a0a] to-indigo-900/10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Loader Container */}
      <div className="relative flex flex-col items-center gap-6">
        {/* Spinning Circle */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-indigo-500/20 rounded-full"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-indigo-500 rounded-full animate-spin"></div>

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles size={24} className="text-indigo-400 animate-pulse" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-semibold text-gray-100">
            Loading <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">Pitchcraft</span>
          </h2>
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

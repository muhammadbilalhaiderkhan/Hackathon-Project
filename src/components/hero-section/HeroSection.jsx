import React from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[#0a0a0a] text-gray-100 min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      
      {/* Background AI-style floating circles */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-indigo-600 rounded-full opacity-20 animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500 rounded-full opacity-10 animate-pulse-slow"></div>
      
      {/* Hero Text */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight z-10 relative">
        Craft Perfect Pitches with <span className="text-indigo-500">AI</span>
      </h1>
      <p className="text-gray-400 max-w-2xl mb-8 text-lg z-10 relative">
        Generate powerful startup or business pitches in seconds.  
        Simple, smart, and designed for creators who want to impress.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 z-10 relative">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-6 py-3 rounded-xl flex items-center gap-2 transition duration-300">
          Create Pitch <ArrowRight size={20} />
        </button>
        <button className="border border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-3 rounded-xl text-lg transition duration-300">
          View Dashboard
        </button>
      </div>


      {/* Floating small AI particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-indigo-400 rounded-full animate-bounce-slow opacity-60"></div>
      <div className="absolute bottom-24 right-20 w-3 h-3 bg-indigo-500 rounded-full animate-bounce-slow opacity-50"></div>
      <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-indigo-300 rounded-full animate-bounce-slow opacity-40"></div>

    </section>
  );
}

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ Added navigation import

export default function HeroSection() {
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <section className="relative bg-[#0a0a0a] text-gray-100 min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-[#0a0a0a] to-indigo-900/10 animate-gradient"></div>

      {/* Large Floating Orbs with Glow */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-600/30 rounded-full blur-3xl animate-pulse-glow"></div>
      <div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      ></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-indigo-400/10 rounded-full blur-2xl animate-float"></div>

      {/* Animated Code Snippets */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {/* Left side code */}
        <div className="absolute left-0 top-0 w-1/4 h-full overflow-hidden">
          <div className="animate-scroll text-indigo-400/60 text-xs font-mono space-y-2 py-4">
            <div>const pitch = await AI.generate()</div>
            <div>function createPitch() &#123;</div>
            <div>&nbsp;&nbsp;return model.analyze()</div>
            <div>&#125;</div>
            <div>export default Pitch</div>
            <div>import &#123; AI &#125; from 'ai'</div>
            <div>const result = process()</div>
            <div>if (pitch.ready) &#123;</div>
            <div>&nbsp;&nbsp;deploy(pitch)</div>
            <div>&#125;</div>
            <div>async function generate()</div>
            <div>return await fetch(api)</div>
            <div>const data = response.json()</div>
            <div>console.log(output)</div>
          </div>
        </div>

        {/* Right side code */}
        <div className="absolute right-0 top-0 w-1/4 h-full overflow-hidden">
          <div
            className="animate-scroll text-indigo-500/60 text-xs font-mono space-y-2 py-4"
            style={{ animationDelay: "-10s" }}
          >
            <div>interface PitchData &#123;</div>
            <div>&nbsp;&nbsp;title: string</div>
            <div>&nbsp;&nbsp;content: string</div>
            <div>&#125;</div>
            <div>const ai = new AIModel()</div>
            <div>pitch.generate().then()</div>
            <div>export &#123; Pitch &#125;</div>
            <div>async getData() &#123;</div>
            <div>&nbsp;&nbsp;await api.call()</div>
            <div>&#125;</div>
            <div>return &#60;Pitch /&#62;</div>
            <div>const config = &#123; ... &#125;</div>
            <div>useEffect(() =&#62; &#123;&#125;)</div>
            <div>model.train(data)</div>
          </div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
          <Sparkles size={16} className="text-indigo-400" />
          <span className="text-sm text-indigo-300 font-medium">AI-Powered Pitch Generation</span>
        </div>

        {/* Hero Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight">
          Craft Perfect Pitches
          <br />
          with{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 bg-clip-text text-transparent animate-gradient">
            AI Magic
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-base sm:text-lg md:text-xl leading-relaxed">
          Generate powerful startup or business pitches in seconds. Simple, smart, and designed for creators who want to impress investors and audiences.
        </p>

        {/* CTA Buttons with navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate("/create")} // ✅ Navigates to CreatePitch page
            className="group relative bg-indigo-600 hover:bg-indigo-700 text-white text-base sm:text-lg px-8 py-4 rounded-xl flex items-center gap-2 transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-105 w-full sm:w-auto"
          >
            <span>Create Pitch</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => navigate("/dashboard")} // ✅ Navigates to Dashboard page
            className="border border-gray-700 hover:border-indigo-500/50 text-gray-300 hover:text-white bg-gray-900/50 hover:bg-gray-800/80 backdrop-blur-sm px-8 py-4 rounded-xl text-base sm:text-lg transition-all duration-300 w-full sm:w-auto"
          >
            View Dashboard
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-2">
            <div className="text-3xl font-bold text-indigo-400">10K+</div>
            <div className="text-sm text-gray-500">Pitches Created</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-3xl font-bold text-indigo-400">99%</div>
            <div className="text-sm text-gray-500">Success Rate</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-3xl font-bold text-indigo-400">&lt;30s</div>
            <div className="text-sm text-gray-500">Generation Time</div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
    </section>
  );
}

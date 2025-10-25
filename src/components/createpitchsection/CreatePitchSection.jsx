import React, { useState } from "react";
import { Sparkles, Wand2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CreatePitchSection() {
  const [idea, setIdea] = useState("");
  const [tone, setTone] = useState("Formal");
  const [generatedPitch, setGeneratedPitch] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();

  const handleGenerate = async () => {
    if (!idea.trim()) {
      alert("Please enter your pitch idea!");
      return;
    }

    setIsGenerating(true);

    // Simulate AI generation delay
    setTimeout(() => {
      setGeneratedPitch(
        `Generated (${tone}) Pitch for: "${idea}".\n\nThis is a demo pitch that showcases how your AI-generated content will appear. The actual implementation will connect to your AI service to create compelling, professional pitches tailored to your specific needs and chosen tone.`
      );
      setIsGenerating(false);

      // Redirect user to create pitch page after generation
      navigate("/create");
    }, 1500);
  };

  return (
    <section className="relative bg-[#0a0a0a] py-24 px-6 text-gray-100 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Wand2 size={16} className="text-indigo-400" />
            <span className="text-sm text-indigo-300 font-medium">AI-Powered Generation</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Create Your <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">Perfect Pitch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Enter your idea, choose a tone, and let AI craft your perfect pitch in seconds.
          </p>
        </div>

        {/* Input Card */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-indigo-500/10 rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="flex flex-col gap-6">
            {/* Idea Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Your Pitch Idea
              </label>
              <textarea
                placeholder="Describe your startup, product, or business idea..."
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                rows={4}
                className="w-full p-4 rounded-xl bg-[#0a0a0a] border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
              />
            </div>

            {/* Tone Selector and Generate Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Pitch Tone
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full p-4 rounded-xl bg-[#0a0a0a] border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 cursor-pointer"
                >
                  <option>Formal</option>
                  <option>Fun</option>
                  <option>Creative</option>
                  <option>Professional</option>
                  <option>Persuasive</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="group w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-600/50 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                      <span>Generate Pitch</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Area */}
        {generatedPitch && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={20} className="text-indigo-400" />
              <h3 className="text-xl font-semibold text-white">Your Generated Pitch</h3>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-indigo-500/10 rounded-2xl p-8 shadow-2xl">
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed whitespace-pre-line text-base">
                  {generatedPitch}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-gray-800">
                <button className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-all duration-300 shadow-lg shadow-indigo-500/20">
                  Save Pitch
                </button>
                <button className="px-5 py-2.5 rounded-lg border border-gray-700 hover:border-indigo-500/50 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300">
                  Copy to Clipboard
                </button>
                <button className="px-5 py-2.5 rounded-lg border border-gray-700 hover:border-indigo-500/50 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300">
                  Export as PDF
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

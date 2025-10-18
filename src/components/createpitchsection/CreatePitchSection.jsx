import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CreatePitchSection() {
  const [idea, setIdea] = useState("");
  const [tone, setTone] = useState("Formal");
  const [generatedPitch, setGeneratedPitch] = useState("");

  const handleGenerate = () => {
    // Temporary demo logic, replace with AI API call
    if (!idea) {
      alert("Please enter your pitch idea!");
      return;
    }
    setGeneratedPitch(
      `Generated (${tone}) Pitch for: "${idea}".\nThis is a demo pitch.`
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="bg-[#0f0f0f] py-20 px-6 text-gray-100"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Create Your Pitch</h2>
        <p className="text-gray-400 text-lg">
          Enter your idea, choose a tone, and let AI craft your perfect pitch.
        </p>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-center mb-10">
        {/* Input Field */}
        <input
          type="text"
          placeholder="Enter your pitch idea..."
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          className="flex-1 p-4 rounded-xl bg-[#121212] border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        {/* Tone Selector */}
        <select
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          className="p-4 rounded-xl bg-[#121212] border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        >
          <option>Formal</option>
          <option>Fun</option>
          <option>Creative</option>
        </select>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          className="bg-indigo-600 hover:bg-indigo-700 px-6 py-4 rounded-xl text-white font-semibold transition transform hover:scale-105"
        >
          Generate
        </button>
      </div>

      {/* Preview Area */}
      {generatedPitch && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto p-6 bg-[#121212] border border-gray-700 rounded-2xl text-left whitespace-pre-line shadow-lg"
        >
          {generatedPitch}
        </motion.div>
      )}
    </motion.section>
  );
}

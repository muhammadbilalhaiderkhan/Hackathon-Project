// src/components/pages/CreatePitch/CreatePitch.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../loader/Loader";
import { db } from "../../../config/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { GoogleGenAI } from "@google/genai";

export default function CreatePitch() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedPitchData, setGeneratedPitchData] = useState(null);

  const handleGeneratePitch = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      // 🔹 Initialize Gemini SDK
      const ai = new GoogleGenAI({
        apiKey: import.meta.env.VITE_GEMINI_API_KEY,
      });

      // 🔹 Generate pitch from Gemini
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Generate a pitch for this project. 
        Title: ${title} 
        Description: ${content} 
        Include: name, target audience, landing page HTML code`,
      });

      const generatedPitch = response.text;

      const pitchData = {
        name: title,
        targetAudience: content,
        landingPage: generatedPitch,
      };

      // 🔹 Save to Firestore
      await addDoc(collection(db, "pitches"), {
        title,
        content,
        generatedPitch: pitchData,
        createdAt: serverTimestamp(),
      });

      // 🔹 Update UI immediately
      setGeneratedPitchData(pitchData);

      toast.success("Pitch generated and saved successfully!");
      setTitle("");
      setContent("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate pitch");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!generatedPitchData?.landingPage) return;
    navigator.clipboard.writeText(generatedPitchData.landingPage);
    toast.success("Landing page code copied!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-start bg-[#0a0a0a] px-6 py-10"
    >
      <Toaster position="top-center" reverseOrder={false} />

      {loading && <Loader />}

      {/* Form */}
      <div className="bg-[#121212] p-10 rounded-3xl shadow-xl max-w-2xl w-full mb-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-100">
          Create Your Pitch
        </h2>

        <form className="flex flex-col gap-5" onSubmit={handleGeneratePitch}>
          <input
            type="text"
            placeholder="Pitch Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-4 rounded-xl bg-[#0f0f0f] border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            required
          />

          <textarea
            placeholder="Pitch Content / Description"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="p-4 rounded-xl bg-[#0f0f0f] border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none h-40"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-gray-600" : "bg-indigo-600 hover:bg-indigo-700"
            } text-white font-semibold py-4 rounded-xl transition transform hover:scale-105`}
          >
            {loading ? "Generating..." : "Generate Pitch"}
          </button>
        </form>
      </div>

      {/* Generated Landing Page */}
      {generatedPitchData && (
        <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-xl max-w-4xl w-full flex flex-col gap-4">
          <h3 className="text-xl font-bold text-gray-100">
            {generatedPitchData.name}
          </h3>
          <p className="text-gray-300">
            Target Audience: {generatedPitchData.targetAudience}
          </p>

          <div className="overflow-x-auto bg-gray-900 p-4 rounded-xl">
            <div
              className="w-[1000px]"
              dangerouslySetInnerHTML={{ __html: generatedPitchData.landingPage }}
            ></div>
          </div>

          <button
            onClick={copyToClipboard}
            className="self-start px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition"
          >
            Copy Landing Page Code
          </button>
        </div>
      )}
    </motion.div>
  );
}

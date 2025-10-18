import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../loader/Loader";
import { db } from "../../../config/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Gemini SDK
import { GoogleGenAI } from "@google/genai";

export default function CreatePitch({ setGeneratedPitch }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGeneratePitch = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      // ✅ Initialize Gemini AI client
      const ai = new GoogleGenAI({
        apiKey: import.meta.env.VITE_GEMINI_API_KEY,
      });

      // ✅ Call Gemini model
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Create a pitch with title: "${title}" and content: "${content}"`,
      });

      const generatedPitch = response.text;

      // ✅ Save to Firestore
      await addDoc(collection(db, "pitches"), {
        title,
        content,
        generatedPitch,
        createdAt: serverTimestamp(),
      });

      // ✅ Send generated pitch to parent / show in GeneratePitch page
      setGeneratedPitch(generatedPitch);

      toast.success("Pitch generated successfully!");
      setTitle("");
      setContent("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate pitch");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-6 py-10"
    >
      <Toaster position="top-center" reverseOrder={false} />
      {loading && <Loader />}
      <div className="bg-[#121212] p-10 rounded-3xl shadow-xl max-w-2xl w-full">
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
    </motion.div>
  );
}

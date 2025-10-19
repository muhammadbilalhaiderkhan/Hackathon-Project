// src/components/pages/GeneratedPitch/GeneratedPitch.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { db } from "../../../config/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

export default function GeneratedPitch() {
  const [pitches, setPitches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPitches = async () => {
      try {
        const q = query(collection(db, "pitches"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const fetchedPitches = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPitches(fetchedPitches);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch pitches");
      } finally {
        setLoading(false);
      }
    };

    fetchPitches();
  }, []);

  const copyToClipboard = (html) => {
    navigator.clipboard.writeText(html);
    toast.success("Landing page code copied!");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-100 text-xl">Loading pitches...</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#0a0a0a] px-6 py-10 flex flex-col gap-10 overflow-y-auto"
      style={{ maxHeight: "100vh" }} // ✅ Ensure vertical scroll
    >
      <Toaster position="top-center" reverseOrder={false} />

      <h1 className="text-4xl font-bold text-center text-gray-100 mb-8">
        Generated Pitches
      </h1>

      {pitches.length === 0 && (
        <p className="text-gray-400 text-center">No pitches generated yet.</p>
      )}

      {pitches.map((pitch) => (
        <div
          key={pitch.id}
          className="bg-[#121212] p-6 rounded-xl shadow-xl flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold text-gray-100">
            {pitch.generatedPitch?.name || pitch.title}
          </h2>
          <p className="text-gray-300">
            Target Audience: {pitch.generatedPitch?.targetAudience || pitch.content}
          </p>

          {/* Landing page container with horizontal scroll */}
          <div className="overflow-x-auto overflow-y-hidden bg-gray-900 p-4 rounded-xl">
            <div
              className="w-[1000px]" // ⚡ Horizontal width for landing page content
              dangerouslySetInnerHTML={{
                __html: pitch.generatedPitch?.landingPage || "<p>No landing page</p>",
              }}
            ></div>
          </div>

          <button
            onClick={() => copyToClipboard(pitch.generatedPitch?.landingPage)}
            className="self-start px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition"
          >
            Copy Landing Page Code
          </button>
        </div>
      ))}
    </motion.div>
  );
}

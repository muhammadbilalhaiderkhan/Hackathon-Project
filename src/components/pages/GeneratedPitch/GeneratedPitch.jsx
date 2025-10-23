// src/components/pages/GeneratedPitch/GeneratedPitch.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { db } from "../../../config/firebase";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { useAuth } from "../../../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

export default function GeneratedPitch() {
  const { user } = useAuth();
  const [pitches, setPitches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchPitches = async () => {
      try {
        const pitchesRef = collection(db, "pitches");
        const q = query(
          pitchesRef,
          where("userId", "==", user.uid),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPitches(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch your pitches. Make sure index exists!");
      } finally {
        setLoading(false);
      }
    };

    fetchPitches();
  }, [user]);

  const copyToClipboard = (html) => {
    if (!html) return;
    navigator.clipboard.writeText(html);
    toast.success("Landing page code copied!");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0a0a0a]">
        <p className="text-gray-100 text-xl">Loading your pitches...</p>
      </div>
    );
  }

  if (pitches.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-gray-300 px-6">
        <h2 className="text-3xl font-bold mb-4">No pitches generated yet!</h2>
        <p>Go to "Create Pitch" and generate your first pitch.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#0a0a0a] px-6 py-10 flex flex-col gap-10 overflow-y-auto"
    >
      <Toaster position="top-center" reverseOrder={false} />

      <h1 className="text-4xl font-bold text-center text-gray-100 mb-8">
        Your Generated Pitches
      </h1>

      {pitches.map((pitch) => (
        <div
          key={pitch.id}
          className="bg-[#121212] p-6 rounded-2xl shadow-xl flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold text-gray-100">
            {pitch.generatedPitch?.name || pitch.title}
          </h2>
          <p className="text-gray-300">
            Target Audience: {pitch.generatedPitch?.targetAudience || pitch.content}
          </p>

          {/* Landing page preview */}
          <div className="overflow-x-auto bg-gray-900 p-4 rounded-xl">
            <div
              className="w-[1000px]"
              dangerouslySetInnerHTML={{
                __html: pitch.generatedPitch?.landingPage || "<p>No landing page</p>",
              }}
            />
          </div>

          {/* Copy landing page button */}
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

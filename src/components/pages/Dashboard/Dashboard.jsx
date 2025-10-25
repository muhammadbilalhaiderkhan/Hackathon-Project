// src/components/pages/Dashboard/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { db } from "../../../config/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export default function Dashboard() {
  const { user } = useAuth();
  const [pitchCount, setPitchCount] = useState(0);

  useEffect(() => {
    if (!user) return;

    // ✅ Query only the current user's pitches
    const pitchesRef = collection(db, "pitches");
    const userPitchesQuery = query(pitchesRef, where("userId", "==", user.uid));

    // ✅ Real-time listener for live updates
    const unsubscribe = onSnapshot(userPitchesQuery, (snapshot) => {
      setPitchCount(snapshot.size);
    });

    return () => unsubscribe(); // cleanup on unmount
  }, [user]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#0a0a0a] text-gray-100 p-6"
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to Dashboard</h1>

      {user ? (
        <p className="text-lg mb-6">
          Hello,{" "}
          <span className="text-indigo-500 font-semibold">
            {user.displayName || user.email.split("@")[0]}
          </span>
          !
        </p>
      ) : (
        <p className="text-lg mb-6">You are not logged in.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ✅ Create Pitch Card */}
        <Link to="/create" className="block">
          <div className="p-6 bg-[#121212] rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2">Create Pitch</h2>
            <p className="text-gray-400">Start creating your perfect pitch.</p>
          </div>
        </Link>

        {/* ✅ User's Generated Pitches */}
        <Link to="/generated" className="block">
          <div className="p-6 bg-[#121212] rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer">
            <h2 className="text-2xl font-semibold mb-2">Generated Pitches</h2>
            <p className="text-gray-400">
              View all the pitches you have generated.
            </p>
            <p className="mt-2 text-indigo-400 font-semibold">
              Total Pitches: {pitchCount}
            </p>
          </div>
        </Link>

        {/* Export Card */}
        <div className="p-6 bg-[#121212] rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Export</h2>
          <p className="text-gray-400">
            Export your pitches to PDF or other formats.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

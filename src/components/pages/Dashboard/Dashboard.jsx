// src/components/pages/Dashboard/Dashboard.jsx
import React from "react";
import { useAuth } from "../../../context/AuthContext";
import { motion } from "framer-motion";

export default function Dashboard() {
  const { user } = useAuth(); // Logged-in user info

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
          Hello, <span className="text-indigo-500 font-semibold">{user.displayName || user.email.split("@")[0]}</span>!
        </p>
      ) : (
        <p className="text-lg mb-6">You are not logged in.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-[#121212] rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Create Pitch</h2>
          <p className="text-gray-400">Start creating your perfect pitch.</p>
        </div>

        <div className="p-6 bg-[#121212] rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Generated Pitches</h2>
          <p className="text-gray-400">View all the pitches you have generated.</p>
        </div>

        <div className="p-6 bg-[#121212] rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Export</h2>
          <p className="text-gray-400">Export your pitches to PDF or other formats.</p>
        </div>
      </div>
    </motion.div>
  );
}

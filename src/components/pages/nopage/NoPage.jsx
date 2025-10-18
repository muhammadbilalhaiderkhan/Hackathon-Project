// src/components/pages/NoPage/NoPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NoPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-gray-100 px-6"
    >
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white font-semibold transition"
      >
        Go Back Home
      </Link>
    </motion.div>
  );
}

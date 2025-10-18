import React from "react";
import { motion } from "framer-motion";

export default function GeneratePitch({ generatedPitch }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] px-6 py-10"
    >
      <div className="bg-[#121212] p-10 rounded-3xl shadow-xl max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-100">
          Generated Pitch
        </h2>

        {generatedPitch ? (
          <p className="text-gray-200 whitespace-pre-line">{generatedPitch}</p>
        ) : (
          <p className="text-gray-400 text-center">
            No pitch generated yet.
          </p>
        )}
      </div>
    </motion.div>
  );
}

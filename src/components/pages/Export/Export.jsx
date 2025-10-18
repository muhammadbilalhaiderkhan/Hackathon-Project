// src/components/pages/Export/Export.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function Export() {
  const [pitches, setPitches] = useState([]);

  // Sample data; aage Firebase se fetch kar sakte ho
  useEffect(() => {
    const samplePitches = [
      { id: 1, title: "Startup Idea 1", content: "Pitch content for idea 1..." },
      { id: 2, title: "Startup Idea 2", content: "Pitch content for idea 2..." },
    ];
    setPitches(samplePitches);
  }, []);

  const handleExportCSV = () => {
    if (pitches.length === 0) {
      toast.error("No pitches to export!");
      return;
    }

    // Create CSV content
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Title,Content", ...pitches.map(p => `${p.title},${p.content}`)].join("\n");

    // Encode and download
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "pitches.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("✅ Pitches exported as CSV!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#0a0a0a] text-gray-100 p-6"
    >
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-4xl font-bold mb-6">Export Pitches</h1>

      {pitches.length === 0 ? (
        <p className="text-gray-400 text-center mt-10">No pitches available to export.</p>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleExportCSV}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-xl font-semibold transition transform hover:scale-105"
          >
            Export All as CSV
          </button>

          <div className="grid gap-6 md:grid-cols-2 mt-6 w-full">
            {pitches.map((pitch) => (
              <div
                key={pitch.id}
                className="bg-[#121212] p-6 rounded-3xl shadow-lg flex flex-col justify-between"
              >
                <h2 className="text-2xl font-semibold mb-3">{pitch.title}</h2>
                <p className="text-gray-300">{pitch.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

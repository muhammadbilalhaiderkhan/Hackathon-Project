import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Demo registration logic
    alert(`Account created for: ${name} (${email})`);
    // Reset form
    setName(""); setEmail(""); setPassword("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-6"
    >
      <div className="bg-[#121212] p-10 rounded-3xl shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-100">Create Your Account</h2>

        <form className="flex flex-col gap-5" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-4 rounded-xl bg-[#0f0f0f] border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 rounded-xl bg-[#0f0f0f] border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 rounded-xl bg-[#0f0f0f] border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            required
          />

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition transform hover:scale-105"
          >
            Register
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-4">
          Already have an account? <Link to="/login" className="text-indigo-500">Login</Link>
        </p>
      </div>
    </motion.div>
  );
}

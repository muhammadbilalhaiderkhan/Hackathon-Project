import React, { useState } from "react";
import { motion } from "framer-motion";
import { auth } from "../../../config/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isRegister) {
        // ✅ Register user
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Account created successfully! Please login now.");
        setTimeout(() => {
          setIsRegister(false); // Switch to login
        }, 1500);
      } else {
        // ✅ Login user
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Welcome back!");
        setTimeout(() => {
          navigate("/"); // Redirect to main page
        }, 1500);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-6"
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-[#121212] p-10 rounded-3xl shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-100">
          {isRegister ? "Create Account" : "Login to Pitchcraft"}
        </h2>

        <form className="flex flex-col gap-5" onSubmit={handleAuth}>
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
            disabled={loading}
            className={`${
              loading ? "bg-gray-600" : "bg-indigo-600 hover:bg-indigo-700"
            } text-white font-semibold py-4 rounded-xl transition transform hover:scale-105`}
          >
            {loading
              ? "Please wait..."
              : isRegister
              ? "Register"
              : "Login"}
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-4">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            className="text-indigo-500 cursor-pointer"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Login" : "Register"}
          </span>
        </p>
      </div>
    </motion.div>
  );
}

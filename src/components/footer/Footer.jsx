import React from 'react'
import { Twitter, Github, Linkedin, Mail } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1e1e1e] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">
            <span className="text-[#6d6dff]">Pitch</span>craft
          </h2>
          <p className="text-sm leading-relaxed text-gray-500 mb-4">
            AI-powered pitch generator that helps founders and creators craft
            compelling startup pitches in seconds.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#6d6dff] transition"><Twitter size={18} /></a>
            <a href="#" className="hover:text-[#6d6dff] transition"><Github size={18} /></a>
            <a href="#" className="hover:text-[#6d6dff] transition"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-[#6d6dff] transition"><Mail size={18} /></a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-medium mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Create Pitch</a></li>
            <li><a href="#" className="hover:text-white transition">Generated Pitches</a></li>
            <li><a href="#" className="hover:text-white transition">Export Tool</a></li>
            <li><a href="#" className="hover:text-white transition">Logo Generator</a></li>
            <li><a href="#" className="hover:text-white transition">Color Palette</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-medium mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition">API Reference</a></li>
            <li><a href="#" className="hover:text-white transition">Tutorials</a></li>
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition">Community</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-medium mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1e1e1e] py-5 text-center text-xs text-gray-600">
        <p>
          © {new Date().getFullYear()} Pitchcraft. Built with ❤️ by{" "}
          <span className="text-[#6d6dff] font-medium">Bilal Haider</span>.
        </p>
      </div>
    </footer>
  );
}
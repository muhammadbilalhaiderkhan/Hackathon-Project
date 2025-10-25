import React from 'react'
import { Twitter, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-gray-400 overflow-hidden">
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/10 via-transparent to-transparent pointer-events-none"></div>

      {/* Top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={20} className="text-indigo-400" />
            <h2 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">Pitch</span>
              <span className="text-white">craft</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-500 mb-6">
            AI-powered pitch generator that helps founders and creators craft
            compelling startup pitches in seconds.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="p-2 rounded-lg bg-gray-800/50 hover:bg-indigo-500/10 hover:text-indigo-400 transition-all duration-300"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-gray-800/50 hover:bg-indigo-500/10 hover:text-indigo-400 transition-all duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-gray-800/50 hover:bg-indigo-500/10 hover:text-indigo-400 transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-gray-800/50 hover:bg-indigo-500/10 hover:text-indigo-400 transition-all duration-300"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Product</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 inline-block">
                Create Pitch
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 inline-block">
                Generated Pitches
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 inline-block">
                Export Tool
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 inline-block">
                Logo Generator
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 inline-block">
                Color Palette
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 inline-block">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 inline-block">
                API Reference
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 inline-block">
                Tutorials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 inline-block">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 inline-block">
                Community
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 inline-block">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 inline-block">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 inline-block">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 inline-block">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300 inline-block">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-indigo-500/10 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Pitchcraft. Built with{" "}
            <span className="text-indigo-400"></span> by{" "}
            <span className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors cursor-pointer">
              Bilal Haider
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

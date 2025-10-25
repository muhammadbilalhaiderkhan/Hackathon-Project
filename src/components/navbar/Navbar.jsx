import React, { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Create Pitch", path: "/create" },
    { name: "Generated Pitch", path: "/generated" },
    { name: "Export", path: "/export" },
  ];

  // ✅ Redirect if not logged in
  const handleNavClick = (path) => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(path);
    }
    setOpen(false);
  };

  // ✅ Proper logout
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
      setOpen(false);
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-indigo-500/10 z-50">
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-white tracking-tight group"
        >
          <Sparkles
            size={20}
            className="text-indigo-400 group-hover:rotate-12 transition-transform"
          />
          <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
          Pitch
          <span className="text-gray-100">craft</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleNavClick(link.path)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-indigo-500/10 text-indigo-400 font-bold"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50 font-normal"
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {!user ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-5 py-2 rounded-lg text-sm bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-300 bg-gray-800/50 px-4 py-2 rounded-lg">
                {user.displayName || user.email?.split("@")[0]}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg text-sm text-gray-300 border border-gray-700 hover:border-indigo-500/50 hover:text-white transition-all duration-300"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-indigo-500/10">
          <ul className="flex flex-col px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNavClick(link.path)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    location.pathname === link.path
                      ? "bg-indigo-500/10 text-indigo-400 font-bold"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50 font-normal"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}

            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-800">
              {!user ? (
                <>
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-lg text-center text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-lg text-center bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-500/20"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <>
                  <div className="px-4 py-3 rounded-lg text-center text-gray-300 bg-gray-800/50">
                    {user.displayName || user.email?.split("@")[0]}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-3 rounded-lg text-center text-gray-300 border border-gray-700 hover:border-indigo-500/50 hover:text-white transition-all duration-300"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

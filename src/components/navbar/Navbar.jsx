import React, { useState } from "react";
import { Menu, X } from "lucide-react";
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
    <nav className="fixed top-0 left-0 w-full bg-[#0a0a0a] border-b border-[#1e1e1e] z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-white tracking-wide">
          <span className="text-[#6d6dff]">Pitch</span>craft
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleNavClick(link.path)}
                className={`hover:text-white transition ${
                  location.pathname === link.path ? "text-[#6d6dff] font-semibold" : ""
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
                className="px-4 py-1.5 rounded-md text-sm text-gray-300 border border-[#2a2a2a] hover:bg-[#1a1a1a] transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-1.5 rounded-md text-sm bg-[#6d6dff] text-white hover:bg-[#5a5aff] transition"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-300">
                {user.displayName || user.email?.split("@")[0]}
              </span>
              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded-md text-sm text-gray-300 border border-[#2a2a2a] hover:bg-[#1a1a1a] transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#1e1e1e]">
          <ul className="flex flex-col items-center py-4 space-y-3 text-gray-400 text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNavClick(link.path)}
                  className={`hover:text-white transition ${
                    location.pathname === link.path ? "text-[#6d6dff] font-semibold" : ""
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}

            <div className="flex gap-3 mt-3">
              {!user ? (
                <>
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="px-4 py-1.5 rounded-md text-gray-300 border border-[#2a2a2a] hover:bg-[#1a1a1a] transition"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setOpen(false)}
                    className="px-4 py-1.5 rounded-md bg-[#6d6dff] text-white hover:bg-[#5a5aff] transition"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <>
                  <span className="text-sm text-gray-300">
                    {user.displayName || user.email?.split("@")[0]}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-1 rounded-md text-sm text-gray-300 border border-[#2a2a2a] hover:bg-[#1a1a1a] transition"
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

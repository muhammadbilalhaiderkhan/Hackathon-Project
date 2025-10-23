import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from '../src/config/firebase.js'

// Layout and Auth
import Layout from "./components/layout/Layout.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";

// Pages
import Home from "./components/pages/home/Home.jsx";
import NoPage from "./components/pages/nopage/NoPage.jsx";
import Login from "./components/pages/login/Login.jsx";
import Register from "./assets/Register/Register.jsx";
import Dashboard from "./components/pages/Dashboard/Dashboard.jsx";
import Export from "./components/pages/Export/Export.jsx";
import CreatePitch from "./components/pages/CreatePitch/CreatePitch.jsx";
import GeneratedPitch from "./components/pages/GeneratedPitch/GeneratedPitch.jsx";

function App() {
    const [generatedPitch, setGeneratedPitch] = useState("");

  return (
    <AuthProvider>
      <Router>
        {/* Layout wraps all pages (Navbar + Footer visible everywhere) */}
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<NoPage />} />

            {/* Protected Routes (Only for logged-in users) */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/create"
              element={
                <ProtectedRoute>
                  <CreatePitch setGeneratedPitch={setGeneratedPitch} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/generated"
              element={
                <ProtectedRoute>
                  <GeneratedPitch generatedPitch={generatedPitch}/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/export"
              element={
                <ProtectedRoute>
                  <Export />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;

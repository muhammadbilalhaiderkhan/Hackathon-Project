import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Loader from "../components/loader/Loader";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Register user
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ✅ Login user
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ✅ Logout user
  const logout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};

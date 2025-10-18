// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPO1me03DAtMvEYEScY3-J3u3yI_hX8so",
  authDomain: "hackathon-project-a890c.firebaseapp.com",
  projectId: "hackathon-project-a890c",
  storageBucket: "hackathon-project-a890c.appspot.com",
  messagingSenderId: "536646676151",
  appId: "1:536646676151:web:f9ad19fef5617d07426732",
  measurementId: "G-Q9GZN5WKHN",
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Initialize Auth
const auth = getAuth(app);

// ✅ Initialize Firestore
const db = getFirestore(app);

// ✅ Export all
export { app, auth, db };

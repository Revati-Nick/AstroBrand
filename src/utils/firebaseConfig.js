// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuamIZgj1QQsGJAZrjm_pFtUaOX9O_EPA",
  authDomain: "astrobrand-398b3.firebaseapp.com",
  projectId: "astrobrand-398b3",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "1064733204726",
  appId: "astrobrand-398b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

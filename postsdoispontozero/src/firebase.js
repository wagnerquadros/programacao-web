import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaWM9Rx1_KCMxqwD6eVixA2X25NIiqpE4",
  authDomain: "pratica-35283.firebaseapp.com",
  projectId: "pratica-35283",
  storageBucket: "pratica-35283.firebasestorage.app",
  messagingSenderId: "561470357153",
  appId: "1:561470357153:web:0552a0f08334a1e95d7ae0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

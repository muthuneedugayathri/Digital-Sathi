import { initializeApp, getApps, getApp } from 'firebase/app';
import type { FirebaseApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import type { Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "demo-api-key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "digital-sathi-demo.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "digital-sathi-demo",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "digital-sathi-demo.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1234567890",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1234567890:web:abcdef123456"
};

export const isFirebaseConfigured = Boolean(
  import.meta.env.VITE_FIREBASE_PROJECT_ID && 
  import.meta.env.VITE_FIREBASE_PROJECT_ID !== "digital-sathi-demo"
);

let app: FirebaseApp;
let db: Firestore | null = null;

try {
  if (isFirebaseConfigured) {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
    console.log("🔥 Connected to Firebase Firestore");
  } else {
    console.log("ℹ️ Running in Local Cache Mode (Add VITE_FIREBASE_PROJECT_ID to connect real Firestore)");
  }
} catch (error) {
  console.warn("Firebase initialization warning:", error);
}

export { db };

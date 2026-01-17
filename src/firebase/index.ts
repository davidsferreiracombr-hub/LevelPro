'use client';

import { initializeApp, getApps, getApp, type FirebaseOptions } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.error(
    'Missing Firebase configuration. Please check your .env.local file and ensure NEXT_PUBLIC_FIREBASE_ variables are set.'
  );
}

export function initializeFirebase() {
  const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);
  return { firebaseApp, firestore };
}

export * from './provider';
export { FirebaseClientProvider } from './client-provider';

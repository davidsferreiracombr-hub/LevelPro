import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCJ1h9t9lEyvXt2BkzqgPHoointLSW6Kps",
  authDomain: "studio-9846334710-a80ac.firebaseapp.com",
  projectId: "studio-9846334710-a80ac",
  storageBucket: "studio-9846334710-a80ac.appspot.com",
  messagingSenderId: "638334388858",
  appId: "1:638334388858:web:d7eac714fc1a7a81d149c3",
};

export function initializeFirebase() {
    const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);
    const firestore = getFirestore(firebaseApp);
    return { firebaseApp, auth, firestore };
}

export * from './provider';
export { FirebaseClientProvider } from './client-provider';
export { useUser } from './auth/use-user';

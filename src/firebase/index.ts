import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './config';

export function initializeFirebase() {
    const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);
    const firestore = getFirestore(firebaseApp);
    return { firebaseApp, auth, firestore };
}

export * from './provider';
export { FirebaseClientProvider } from './client-provider';
export { useUser } from './auth/use-user';

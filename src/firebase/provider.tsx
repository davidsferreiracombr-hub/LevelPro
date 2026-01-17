'use client';
import { type FirebaseApp } from 'firebase/app';
import { type Firestore } from 'firebase/firestore';
import { createContext, useContext, type ReactNode } from 'react';

type FirebaseContextValue = {
  firebaseApp: FirebaseApp;
  firestore: Firestore;
};

const FirebaseContext = createContext<FirebaseContextValue | null>(null);

export function FirebaseProvider({ children, value }: { children: ReactNode; value: FirebaseContextValue }) {
  return (
    <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>
  );
}

export function useFirebase() {
    const context = useContext(FirebaseContext);
    if (context === null) {
        throw new Error('useFirebase must be used within a FirebaseProvider');
    }
    return context;
}

export function useFirebaseApp() {
  return useFirebase().firebaseApp;
}
export function useFirestore() {
  return useFirebase().firestore;
}

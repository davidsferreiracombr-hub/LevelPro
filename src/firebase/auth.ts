import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  type Auth,
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp, type Firestore } from 'firebase/firestore';
import { z } from 'zod';
import { LoginSchema, RegisterSchema } from '@/lib/auth-schemas';


export const signUp = async (auth: Auth, firestore: Firestore, { email, password, fullname }: z.infer<typeof RegisterSchema>) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  await updateProfile(user, { displayName: fullname });

  await setDoc(doc(firestore, 'users', user.uid), {
    uid: user.uid,
    email: user.email,
    name: fullname,
    createdAt: serverTimestamp(),
  });

  return user;
};

export const signIn = async (auth: Auth, { email, password }: z.infer<typeof LoginSchema>) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

export const logOut = (auth: Auth) => {
  return signOut(auth);
};

export const resetPassword = (auth: Auth, email: string) => {
  return sendPasswordResetEmail(auth, email);
};

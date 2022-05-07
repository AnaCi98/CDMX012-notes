/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext, useContext, useEffect, useState,
} from 'react';
import { act } from 'react-dom/test-utils';
import {
  GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error('There is no provider');
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginGoogle = () => {
    const providerGoogle = new GoogleAuthProvider();
    return signInWithPopup(auth, providerGoogle);
  };

  const getOutSession = () => signOut(auth);

  useEffect(() => {
    const onSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      act(() => {
        setLoading(false);
      });
    });

    return () => onSubscribe();
  }, []);

  return (
    <authContext.Provider value={{
      user, loading, loginGoogle, getOutSession,
    }}
    >
      {children}
    </authContext.Provider>
  );
}

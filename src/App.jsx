import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import {
  onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut,
} from 'firebase/auth';
import './App.css';
import { auth } from './firebase/firebaseConfig';
import Paths from './Paths';

function App() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) { setUser(currentUser); } else { setUser(null); }
  });

  const loginGoogle = () => {
    const providerGoogle = new GoogleAuthProvider();
    return signInWithPopup(auth, providerGoogle);
  };

  const getOutSession = () => signOut(auth);

  return (
    <Router>
      <Paths user={user} loginGoogle={loginGoogle} getOutSession={getOutSession} />
    </Router>
  );
}

export default App;

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCZr5FgN1kLzJGp2KFyhpEF_vEwMqelC7A',
  authDomain: 'notes-65af9.firebaseapp.com',
  projectId: 'notes-65af9',
  storageBucket: 'notes-65af9.appspot.com',
  messagingSenderId: '888826500718',
  appId: '1:888826500718:web:2891fadd6ec8d94cdf787f',
  measurementId: 'G-2MJY79011T',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// enableIndexedDbPersistence(db)
//   .catch((err) => {
//     if (err.code === 'failed-precondition') {
//       // Multiple tabs open, persistence can only be enabled
//       // in one tab at a a time.
//       // ...
//     } else if (err.code === 'unimplemented') {
//       // The current browser does not support all of the
//       // features required to enable persistence
//       // ...
//     }
//   });

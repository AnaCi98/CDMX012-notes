import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebase.js';
import App from './App';

// ReactDOM.render(<App/>, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  //  <React.StrictMode>
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={<p>Cargando...</p>}>
      <App />
    </Suspense>
  </FirebaseAppProvider>

  //  </React.StrictMode>
 );


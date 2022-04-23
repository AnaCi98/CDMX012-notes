import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from './firebaseConfig';

const auth = getAuth(app);

export const loginGoogle = () => {
const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // // The signed-in user info.
    // const user = result.user;
    console.log('si jalo',credential);
  }).catch((error) => {
    console.log(error);
  });
}

export default auth;
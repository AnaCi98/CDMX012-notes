import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from './firebaseConfig';

const createNote = async (values) => {
  const users = auth.currentUser;
  const UID = users.uid;
  if (users) {
    try {
      await addDoc(collection(db, 'notes'), {
        title: values.title,
        content: values.content,
        UserUID: UID,
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
};
export default createNote;

import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

const createNote = async (values) => {
  try {
    await addDoc(collection(db, 'notes'), {
      title: values.title,
      content: values.content,
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
export default createNote;

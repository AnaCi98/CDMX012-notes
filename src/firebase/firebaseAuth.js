import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from './firebaseConfig';

const createNote = async (values) => {
  const users = auth.currentUser;
  const UID = users.uid;
  const today = new Date(Date.now());
  const todayShort = today.toLocaleDateString();
  const todayHour = today.getHours().toString();
  const todayMinutes = today.getMinutes().toString();

  console.log(`${todayHour}:${todayMinutes}`);
  // console.log('Ana' + {todayHour.toString()}, todayMinutes.toString());
  if (users) {
    try {
      await addDoc(collection(db, 'notes'), {
        title: values.title,
        content: values.content,
        UserUID: UID,
        date: todayShort,
        dateHour: `${todayHour}:${todayMinutes}`,
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
};
export default createNote;

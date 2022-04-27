import './Notes.css';
import { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from "firebase/firestore";
import {db} from '../../firebase/firebaseConfig';



function Notes() {
  const [notes, setNotes] = useState({});

    useEffect(() => {
      // const renderNotes =  () => {
        const arrayNotes = [];
        const q = query(collection(db, 'notes'));
         onSnapshot(q, (querySnapshot) => {
          querySnapshot.forEach((docs) => {
            arrayNotes.push({ ...docs.data(), id: docs.id });
          });
        setNotes(arrayNotes)
        });
  // };
    }, [notes]);


    return <article className="notes">
    <p onClick={() => console.log(notes)}>titulo</p>
    <p>Contenido</p>
    </article>
}
export default Notes;
import './Notes.css';
import { useEffect, useState } from 'react';
import { collection, query, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import {db} from '../../firebase/firebaseConfig';



function Notes() {
  const [notes, setNotes] = useState([]);

  const deleteNote = async (id) => {
    await deleteDoc(doc(db, "notes", id));
  }
  

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


    return <section>
    {notes.map((note) => 
      <div className="notes">
      <p onClick={() => { deleteNote(note.id) }}>borrar</p>
        <p>{note.title}</p>
        <p>{note.content}</p>
      </div>
    )}
    </section>
}
export default Notes;

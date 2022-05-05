/* eslint-disable react/no-children-prop */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './Notes.css';
import { useEffect, useState } from 'react';
import {
  collection, query, onSnapshot, deleteDoc, doc,
} from 'firebase/firestore';
import {
  Link,
} from 'react-router-dom';
import { db } from '../../firebase/firebaseConfig';
// import EditNotes from './EditNote';

function Notes() {
  const [notes, setNotes] = useState([]);

  const renderNotes = () => {
    const arrayNotes = [];
    const q = query(collection(db, 'notes'));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((docs) => {
        arrayNotes.push({ ...docs.data(), id: docs.id });
      });
      setNotes(arrayNotes);
    });
  };

  const deleteNote = async (id) => {
    await deleteDoc(doc(db, 'notes', id));
    renderNotes();
  };

  useEffect(() => {
    renderNotes();
  }, []);
  console.count('componente Note');
  return (
    <section className="allNotes">
      {notes.map((note) => (
        <div key={note.id} className="notes">
          <div className="navTitle">
            <p className="fontTitle">{note.title}</p>
            <div className="iconsEdit">
              <img
                onClick={() => { deleteNote(note.id); }}
                className="deleteIcon"
                src={require('../../images/deleteNote.png')}
                alt="icon of erase"
              />
              <Link to={`/editnote${note.id}`}>
                <p>EDITAR</p>
              </Link>
            </div>
          </div>
          <p className="fontContent">{note.content}</p>
        </div>
      ))}
      {/* <Route path="/:id" children={<EditNotes />} /> */}
    </section>
  );
}
export default Notes;

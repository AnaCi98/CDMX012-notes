/* eslint-disable react/no-children-prop */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './Notes.css';
import { useEffect, useState } from 'react';
import {
  collection, query, onSnapshot,
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

  useEffect(() => {
    renderNotes();
  }, []);
  console.count('componente Note');
  return (
    <section className="allNotes">
      {notes.map((note) => (
        <Link to={`/editnote${note.id}`} style={{ textDecoration: 'none' }}>
          <div key={note.id} className="notes">
            <div className="navTitle">
              <p className="fontTitle">{note.title}</p>
            </div>
            <p className="fontContent">{note.content}</p>
          </div>
        </Link>
      ))}
      {/* <Route path="/:id" children={<EditNotes />} /> */}
    </section>
  );
}
export default Notes;

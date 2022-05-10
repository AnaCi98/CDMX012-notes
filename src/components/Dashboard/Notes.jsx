/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
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

function Notes(props) {
  const { user } = props;
  const [notes, setNotes] = useState([]);

  const renderNotes = () => {
    const arrayNotes = [];
    const q = query(collection(db, 'notes'));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((docs) => {
        if (docs.data().UserUID === user.uid) {
          arrayNotes.push({ ...docs.data(), id: docs.id });
        }
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
        <Link key={note.id} to={`/editnote${note.id}`} style={{ textDecoration: 'none' }}>
          <div className="notes">
            <div className="navTitle">
              <p className="fontTitle">{note.title}</p>
            </div>
            <p className="fontContent">{note.content}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}
export default Notes;

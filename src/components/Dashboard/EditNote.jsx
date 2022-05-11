/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable global-require */
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  updateDoc, doc, getDoc, deleteDoc,
} from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import './EditNote.css';
import './CreateNote.css';

export default function EditNotes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [docdata, setDocdata] = useState([]);
  const [values, setValues] = useState({});
  const [colored, setColor] = useState();
  const handleChange = (event) => {
    event.persist();

    const { name } = event.target;
    const val = event.target.value;

    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleChangeColor = (colors) => {
    setColor(colors);
  };

  const readData = async () => {
    const contentNote = [];
    const docSnap = await getDoc(doc(db, 'notes', id));
    contentNote.push(docSnap.data());
    setDocdata(contentNote);
  };

  const editDoc = async (idPost) => {
    const docRef = doc(db, 'notes', idPost);
    const newToday = new Date(Date.now());
    const newTodayShort = newToday.toLocaleDateString();
    const newTodayHour = newToday.getHours().toString();
    const newTodayMinutes = newToday.getMinutes().toString();
    const newTodaySeconds = newToday.getSeconds().toString();

    await updateDoc(docRef, {
      title: values.title,
      content: values.content,
      date: newTodayShort,
      dateHour: `${newTodayHour}:${newTodayMinutes}`,
      dateSeconds: `${newTodayHour}:${newTodayMinutes}:${newTodaySeconds}`,
      color: colored,
    });
    navigate('/');
  };

  const deleteNote = async (idPost) => {
    await deleteDoc(doc(db, 'notes', idPost));
    navigate('/');
  };

  useEffect(() => {
    readData();
  }, []);
  // if (!docSnap) return null;
  return (
    <div id="newNote" className="new-note">
      {docdata.map((data) => (
        <div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img
              className="arrowBack"
              src="../../images/arrowBack.png"
              alt="logo of arrow back"
            />
          </Link>
          <div className="containerNoteContent">
            <input type="text" className="tittle" name="title" placeholder="Título" defaultValue={data.title} onChange={handleChange} />
            <input type="text" className="noteContent" name="content" placeholder="Escribe tu nota aqui" defaultValue={data.content} onChange={handleChange} />
          </div>
          <div className="ButtonsColors">
            <button name="color" className="purpleButton" onClick={() => handleChangeColor('Purple')}> </button>
            <button name="color" className="yellowButton" onClick={() => handleChangeColor('Yellow')}> </button>
            <button name="color" className="greenButton" onClick={() => handleChangeColor('Green')}> </button>
            <button name="color" className="blueButton" onClick={() => handleChangeColor('Blue')}> </button>
            <button name="color" className="pinkButton" onClick={() => handleChangeColor('Pink')}> </button>
          </div>
          <div className="iconsEdit">
            <img
              className="newImage"
              src="../../images/newImage.png"
              alt="logo of new imagen"
            />
            <img
              className="colorNote"
              src="../../images/colorNote.png"
              alt="logo of color"
            />
            <img
              onClick={() => { deleteNote(id); }}
              className="deleteIcon"
              src="../../images/deleteNote.png"
              alt="icon of erase"
            />
            <p className="date">
              {data.date}
              {' '}
              {data.dateHour}
            </p>
            <button
              type="submit"
              className="sendNoteEdit"
              onClick={() => {
                editDoc(id);
              }}
            >
              <img
                className="sendNoteIcon"
                src="../../images/sendNote.png"
                alt="logo of send note"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

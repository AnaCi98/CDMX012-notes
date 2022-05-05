/* eslint-disable global-require */
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { updateDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

export default function EditNotes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [docdata, setDocdata] = useState([]);
  const [values, setValues] = useState({});
  const handleChange = (event) => {
    event.persist();

    const { name } = event.target;
    const val = event.target.value;

    setValues({
      ...values,
      [name]: val,
    });
  };

  const readData = async () => {
    const contentNote = [];
    const docSnap = await getDoc(doc(db, 'notes', id));
    contentNote.push(docSnap.data());
    setDocdata(contentNote);
  };

  const editDoc = async (idPost) => {
    const docRef = doc(db, 'notes', idPost);
    await updateDoc(docRef, {
      title: values.title,
      content: values.content,
    });
    navigate('/home');
  };

  useEffect(() => {
    readData();
  }, []);
  // if (!docSnap) return null;
  return (
    <div className="new-note">
      {docdata.map((data) => (
        <>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <img
              className="arrowBack"
              src={require('../../images/arrowBack.png')}
              alt="logo of arrow back"
            />
          </Link>
          <input type="text" className="tittle" name="title" placeholder="Título" value={data.title} onChange={handleChange} />
          <input type="text" className="noteContent" name="content" placeholder="Escribe tu nota aqui" value={data.content} onChange={handleChange} />
          <div className="icons">
            <img
              className="newImage"
              src={require('../../images/newImage.png')}
              alt="logo of new imagen"
            />
            <img
              className="colorNote"
              src={require('../../images/colorNote.png')}
              alt="logo of color"
            />
            <button
              type="submit"
              className="sendNote"
              onClick={() => {
                editDoc(id);
              }}
            >
              <img
                className="sendNoteIcon"
                src={require('../../images/sendNote.png')}
                alt="logo of send note"
              />
            </button>
          </div>

        </>
      ))}
    </div>
  );
}

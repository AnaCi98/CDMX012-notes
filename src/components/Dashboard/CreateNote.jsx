import './CreateNote.css';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../firebase/firebaseConfig';

function CreateNote() {
  const navigate = useNavigate();
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    event.persist();

    const { name } = event.target;
    const val = event.target.value;

    setValues({
      ...values,
      [name]: val,
    });
    event.preventDefault();
    event.stopPropagation();
  };

  const submit = async () => {
    try {
      await addDoc(collection(db, 'notes'), {
        title: values.title,
        content: values.content,
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    console.log(values);
    navigate('/home');
  };
  return (
    <div className="new-note">
      <Link to="/home" style={{ textDecoration: 'none' }}>
        <img
          className="arrowBack"
          src={require('../../images/arrowBack.png')}
          alt="logo of arrow back"
        />
      </Link>
      <input type="text" className="tittle" name="title" placeholder="Título" onChange={handleChange} />
      <input type="text" className="noteContent" name="content" placeholder="Escribe tu nota aqui" onChange={handleChange} />
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
        {/* <img className='deleteNote'
            src={require('../../images/deleteNote.png')}
            alt = 'logo of delete notes'/> */}
        <button
          className="sendNote"
          onClick={() => {
            submit();
          }}
        >
          {' '}
          <img
            className="sendNoteIcon"
            src={require('../../images/sendNote.png')}
            alt="logo of send note"
          />

        </button>
      </div>
    </div>

  );
}

export default CreateNote;

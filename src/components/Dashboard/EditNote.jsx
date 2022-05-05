/* eslint-disable global-require */
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function EditNotes() {
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
  });
  return (
    <div className="new-note">
      <Link to="/home" style={{ textDecoration: 'none' }}>
        <img
          className="arrowBack"
          src={require('../../images/arrowBack.png')}
          alt="logo of arrow back"
        />
      </Link>
      <input type="text" className="tittle" name="title" placeholder="Título" />
      <input type="text" className="noteContent" name="content" placeholder="Escribe tu nota aqui" />
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
        //   onClick={() => {
        //     submit();
        //   }}
        >
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

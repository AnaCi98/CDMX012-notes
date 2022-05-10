/* eslint-disable react/button-has-type */
/* eslint-disable global-require */
import './CreateNote.css';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/FormLogin';

function CreateNote() {
  const { handleChange, submit } = useForm();
  return (
    <div className="new-note">
      <Link to="/" style={{ textDecoration: 'none' }}>
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

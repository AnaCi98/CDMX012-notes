import './CreateNote.css';
import { useState } from 'react';
import {db} from '../../firebase/firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

function CreateNote() {
    // const [ content, setContent ] = useState('');
    // const [ tittle, setTitle ] = useState('');
    const [values, setValues] = useState({});


    const handleChange = (event) => {
        //  setContent(event.target.value)
        //  setTitle(event.target.value)
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        setValues({
          ...values,
          [name]:val,
      })
        }
    const submit = async () => {
        try {
            await addDoc(collection(db, "notes"), {
              title: values.title,
              content: values.content,
            });
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          console.log(values)

        // console.log(content)
        }
    return (
    <div className='new-note'>
        <input type="text" className='tittle' name = 'title' placeholder='Título' onChange={handleChange}/>
        <input type="text" className='noteContent' name = 'content' placeholder='Escribe tu nota aqui' onChange={handleChange}/>
        <button onClick={submit}>SUBETE</button>
        <div className='icons'>
            <img className='newImage'
            src={require('../../images/newImage.png')}
            alt = 'logo of new imagen'/>
            <img className='colorNote'
            src={require('../../images/colorNote.png')}
            alt = 'logo of color'/>
            <img className='deleteNote'
            src={require('../../images/deleteNote.png')}
            alt = 'logo of delete notes'/>
        </div>
    </div>
 
    );
}

export default CreateNote;
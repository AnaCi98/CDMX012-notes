import './CreateNote.css';
function CreateNote() {

    return (
    <div className='new-note'>
        <input type="text" className='tittle' placeholder='Título'/>
        <input type="text" className='noteContent' placeholder='Escribe tu nota aqui'/>
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
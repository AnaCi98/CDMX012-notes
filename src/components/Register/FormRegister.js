import React, { useState } from "react";

function FormRegister(props) {
    const { email, setEmail } = useState('');
    const submit = (event) => {
        console.log(event.target.value);
        setEmail({
            ...email,
            [event.target.name]: event.target.value
        })
    }

    return (
    <div className='form-register'>
        <input type="text" id='email' name='email' className="data-login" placeholder="Correo electronico" onChange={submit}/>
        <input type="text" className="data-login" placeholder="Contraseña"/>
        <button className="button-register"> Registrarte </button>
    </div>
    );
}

export default FormRegister;
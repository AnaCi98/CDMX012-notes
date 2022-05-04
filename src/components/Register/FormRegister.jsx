/* eslint-disable react/button-has-type */
import { useState } from 'react';
// import { Link } from 'react-router-dom';

function FormRegister() {
  const [email, setEmail] = useState('');
  const submit = (event) => {
    // let email = event.target.name;
    // console.log(event.target.value);
    setEmail(event.target.value);

    //        ...email,
    //         [event.target.name]: event.target.value
    //     })
  };
  console.log(email);
  return (
    <div className="form-register">
      <input type="text" id="email" name="email" className="data-register" placeholder="Correo electronico" onChange={submit} />
      <input type="text" className="data-register" placeholder="Contraseña" />
      <button className="button-register">
        {/* <Link to="/" style={{ textDecoration: 'none', color: 'white'}}> */}
        Registrarte
        {/* </Link> */}
      </button>
    </div>
  );
}

export default FormRegister;

import React from 'react';
import { Link } from 'react-router-dom';


function Login() {
    return (
    <div className='container-login'>
        <img className='logoTK'
        src={require('../images/logo.png')}
        alt = 'logo of take notes'
        />
        <div className='container-button-login'>
        <button className='button-Login-Google'>
            <Link to="/home">
                Inicia sesion con Google
            </Link>
        </button>
        <img className='logoGoogle'
        src={require('../images/logoGoogle.png')}
        alt = 'logo of Google'
        />
        </div>
    </div>
    );
}

export default Login;
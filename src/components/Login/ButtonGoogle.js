import { Link } from 'react-router-dom';

function ButtonGoogle() {
    return (
        <div className='container-button-login'>
        <button className='button-Login-Google'>
            <Link to="/home">
                Inicia sesion con Google
            </Link>
        </button>
        <img className='logoGoogle'
        src={require('../../images/logoGoogle.png')}
        alt = 'logo of Google'
        />
        </div>
    );
}

export default ButtonGoogle;
import {loginGoogle} from '../../firebase/firebaseAuth';


function ButtonGoogle() {
    return (
        <div className='container-button-login'>
         <img className='logoGoogle'
        src={require('../../images/logoGoogle.png')}
        alt = 'logo of Google'
        />
        <button className='button-Login-Google' onClick={loginGoogle}>
                Inicia sesion con Google
        </button>
        </div>
    );
}

export default ButtonGoogle;
import { Link } from 'react-router-dom';

function NewAccount() {
    return (
    <div className='form-new-account'> 
        <p> ¿No tienes una cuenta?</p>
        <Link to="/register">
        <p className="send-view-register">Registrate</p>
        </Link>

    </div>
    );
}

export default NewAccount;
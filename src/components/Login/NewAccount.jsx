import { Link } from 'react-router-dom';

function NewAccount() {
  return (
    <div className="form-new-account">
      <p className="p-have-account"> ¿No tienes una cuenta?</p>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        <p className="p-send-view-register">Registrate</p>
      </Link>
    </div>
  );
}

export default NewAccount;

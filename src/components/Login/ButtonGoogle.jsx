import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

function ButtonGoogle() {
  const navigate = useNavigate();
  const { loginGoogle } = useAuth();

  const handleGoogle = async () => {
    await loginGoogle();
    navigate('/home');
  };

  return (
    <div className="container-button-login">
      <img
        className="logoGoogle"
        src="../../images/logoGoogle.png"
        alt="logo of Google"
      />
      <button className="button-Login-Google" type="submit" onClick={handleGoogle}>
        Inicia sesion con Google
      </button>
    </div>
  );
}

export default ButtonGoogle;

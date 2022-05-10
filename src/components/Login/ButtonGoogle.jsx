/* eslint-disable react/prop-types */

function ButtonGoogle(props) {
  const { loginGoogle } = props;

  const handleGoogle = async () => {
    await loginGoogle();
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

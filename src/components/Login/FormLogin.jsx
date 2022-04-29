function FormLogin() {
  return (
    <div className="form-login">
      <input type="text" className="data-login" placeholder="Correo electronico" />
      <input type="text" className="data-login" placeholder="Contraseña" />
      <button className="button-login">
        {/* <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}> */}
        Inicia sesion
        {/* </Link> */}
      </button>
    </div>
  );
}

export default FormLogin;

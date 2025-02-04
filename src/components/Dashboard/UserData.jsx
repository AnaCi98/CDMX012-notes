/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable global-require */
import './NavTop.css';

export default function UserData(props) {
  const {
    data, closeData, getOutSession, user,
  } = props;

  const handleSignOut = async () => {
    await getOutSession();
  };
  if (!data) return null;
  return (
    <div className="container-userData">
      <p onClick={closeData} className="closeData">X</p>
      <p className="displayName">{user.displayName}</p>
      <p className="userDisplayEmail">{user.email}</p>
      <section className="sectionLogOut">
        <img
          onClick={handleSignOut}
          className="logoSignOut"
          src="../../images/signout.png"
          alt="logo of signout"
        />
        <p className="textSignOut">Cerrar sesion</p>
      </section>

    </div>
  );
}

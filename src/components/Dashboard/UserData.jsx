/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable global-require */
import { useNavigate } from 'react-router-dom';
import './NavTop.css';

export default function UserData(props) {
  const {
    data, closeData, getOutSession, user,
  } = props;
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await getOutSession();
    navigate('/');
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
          src={require('../../images/signout.png')}
          alt="logo of signout"
        />
        <p className="textSignOut">Cerrar sesion</p>
      </section>

    </div>
  );
}

/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable global-require */
import { useState } from 'react';
import './NavTop.css';
// import { useAuth } from '../../context/authContext';
import UserData from './UserData';

export default function NavTop(props) {
  const { user, getOutSession } = props;
  const [data, setData] = useState(false);
  const closeData = () => {
    setData(false);
  };

  return (
    <div className="nav-top">
      {/* Aqui debe contener una imagen de un profile default */}
      <UserData data={data} closeData={closeData} getOutSession={getOutSession} user={user} />
      <img
        className="logoTop"
        src="../../images/logo.png"
        alt="logo of take notes"
      />
      <img
        onClick={() => setData(true)}
        className="photoUser"
        src={user.photoURL}
        alt="images of user"
      />
    </div>
  );
}

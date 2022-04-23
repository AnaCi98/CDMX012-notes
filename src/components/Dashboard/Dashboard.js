import React from 'react';
import { signOut } from "firebase/auth";
import auth from '../../firebase/firebaseAuth';
import './Dashboard.css';
import CreateNote from './CreateNote';


// import { Link } from 'react-router-dom';

function Dashboard() {
  // const [ displayName, setName ] = useState('');

  const user = auth.currentUser;
  // if (user !== null) {
  //   setName(user.displayName)
  // }


    const getOutSession = () => {
      signOut(auth).then(() => {
        console.log('si jalo')
            })
    }

    return (
        <div className='container-home'>
          <div className='nav-top'>
          {/* <Link to="/" style={{ textDecoration: 'none', color: 'white'}}> */}
            <img onClick={getOutSession} className='logoSignOut'
        src={require('../../images/signout.png')}
        alt = 'logo of signout'/>
          {/* </Link> */}
            <p className='displayName'>{user.displayName}</p>
          </div>
          <CreateNote/>
        </div>
    );
}

export default Dashboard;
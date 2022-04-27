import { useAuth } from '../../context/authContext';
import './Dashboard.css';
import { Link, useNavigate } from 'react-router-dom';
import Notes from './Notes';


// import { Link } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
    const {getOutSession, user} = useAuth();

    const handleSignOut = async () => {
        await getOutSession()
        navigate('/')
    }
    return (
        <div className='container-home'>
          <div className='nav-top'>
          {/* <Link to="/" style={{ textDecoration: 'none', color: 'white'}}> */}
            <img onClick={handleSignOut} className='logoSignOut'
        src={require('../../images/signout.png')}
        alt = 'logo of signout'/>
          {/* </Link> */}
            <p className='displayName'>{user.displayName}</p>
          </div>
          <Link to="/note" style={{ textDecoration: 'none'}}>
          <div className='create-note'>
            <p>Crear nota</p>
          </div>
          </Link>
          <Notes/>
        </div>
    );
}

export default Dashboard;
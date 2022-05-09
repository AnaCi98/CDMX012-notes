/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable global-require */
import { Link } from 'react-router-dom';
import './Dashboard.css';
import Notes from './Notes';
import NavTop from './NavTop';

// import { Link } from 'react-router-dom';

function Dashboard(props) {
  const { user, getOutSession } = props;
  return (
    <div className="container-home">
      <NavTop user={user} getOutSession={getOutSession} />
      <Link to="/note" style={{ textDecoration: 'none' }}>
        <div className="create-note">
          <p className="addNote">
            +
          </p>

          {/* <img
            className="addNote"
            src={require('../../images/addNote.png')}
            alt="icon of addNote  "
          /> */}
        </div>
      </Link>
      <Notes />
    </div>
  );
}

export default Dashboard;

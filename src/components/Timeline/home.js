import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='container-home'>
          <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>
          <img className='logoSignOut'
        src={require('../../images/signout.png')}
        alt = 'logo of signout'/>
          </Link>
          <p>Ana Cifuentes</p>
        </div>
    );
}

export default Home;
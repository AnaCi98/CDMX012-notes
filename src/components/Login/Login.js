import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from '../../firebase/firebaseAuth';
import ButtonGoogle from './ButtonGoogle';
import FormLogin from './FormLogin';
import Logo from '../Logo';
import NewAccount from './NewAccount';
import './Login.css';

function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
            navigate('/home')
            } 
            else {
            navigate('/')
            }
          });          
      }, [navigate]);

    return (
    <body style={{ backgroundColor : '#f2def5'}}>
        <div className='container-login'>
            <Logo/>
            <FormLogin/>
            <ButtonGoogle/>
            <NewAccount/>
        </div>
    </body>
    );
}

export default Login;
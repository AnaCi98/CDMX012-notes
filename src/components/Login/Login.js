import ButtonGoogle from './ButtonGoogle';
import FormLogin from './FormLogin';
import Logo from '../Logo';
import NewAccount from './NewAccount';
import './Login.css';

function Login() {
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
import ButtonGoogle from './ButtonGoogle';
import FormLogin from './FormLogin';
import Logo from '../Logo';
import NewAccount from './NewAccount';

function Login() {
    return (
    <div className='container-login'>
        <Logo/>
        <FormLogin/>
        <ButtonGoogle/>
        <NewAccount/>
    </div>
    );
}

export default Login;
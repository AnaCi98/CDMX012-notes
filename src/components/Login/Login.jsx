import { useAuth } from '../../context/authContext';
import ButtonGoogle from './ButtonGoogle';
import FormLogin from './FormLogin';
import Logo from '../Logo';
import NewAccount from './NewAccount';
import './Login.css';

function Login() {
  const { user } = useAuth();
  // // if(user) return <Navigate to = '/home'/>
  console.log(user);

  return (
    <div className="container-login">
      <Logo />
      <FormLogin />
      <ButtonGoogle />
      <NewAccount />
    </div>
  );
}

export default Login;

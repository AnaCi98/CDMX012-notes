/* eslint-disable react/prop-types */
// import { useAuth } from '../../context/authContext';
import ButtonGoogle from './ButtonGoogle';
import FormLogin from './FormLogin';
import Logo from '../Logo';
import NewAccount from './NewAccount';
import './Login.css';

function Login(props) {
  // const { user } = useAuth();
  // // if(user) return <Navigate to = '/home'/>
  // console.log(user);
  const { loginGoogle } = props;

  return (
    <div className="container-login">
      <Logo />
      <FormLogin />
      <ButtonGoogle loginGoogle={loginGoogle} />
      <NewAccount />
    </div>
  );
}

export default Login;

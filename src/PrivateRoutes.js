import { Navigate } from 'react-router-dom';
import { useAuth } from './context/authContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();

    if(loading) return console.log('loading');
    if(!user) return <Navigate to = '/'/>

    return children 
};
 export default PrivateRoute;


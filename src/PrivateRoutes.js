// import { onAuthStateChanged } from "firebase/auth";
// import auth from './firebase/firebaseAuth';
// import { Navigate } from "react-router-dom"; 



// // const PrivateRoute = ({children}) => {
// //     onAuthStateChanged(auth, (user) => {
// //     if(user){
// //     return <Navigate to='/home' />
// //     }
// //     else{
// //     return <Navigate to='/' />
// //     }
// //   });
// //   return children
// // }
// // const PrivateRoute = ({ children, ...rest }) => {
// //     let auth = useAuth();
// //     return (
// //       <Route
// //         {...rest}
// //         render={({ location }) =>
// //           auth.user ? (
// //             children
// //           ) : (
// //             <Redirect
// //               to={{
// //                 pathname: "/login",
// //                 state: { from: location }
// //               }}
// //             />
// //           )
// //         }
// //       />
// //     );
// //   }

// export default PrivateRoute;
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import './App.css';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Dashboard from './components/Dashboard/Dashboard.js';
// import PrivateRoute from './PrivateRoutes';

function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/home' element={
  // <PrivateRoute>
 <Dashboard/>
  // </PrivateRoute>
}/>
  <Route path='/register' element={<Register/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;

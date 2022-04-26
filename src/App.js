import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import './App.css';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import CreateNote from './components/Dashboard/CreateNote';
import {AuthProvider} from './context/authContext';
import PrivateRoute from './PrivateRoutes';

function App() {
  return (
  <BrowserRouter>
  <AuthProvider>
  <Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/home' element={
  <PrivateRoute>
      <Dashboard/>
  </PrivateRoute>
}/>
  <Route path='/note' element={
      <PrivateRoute>
  <CreateNote/>
  </PrivateRoute>
  }/>
  <Route path='/register' element={<Register/>}/>
  </Routes>
  </AuthProvider>
  </BrowserRouter>
  );
}

export default App;

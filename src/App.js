import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import './App.css';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Home from './components/Timeline/home.js';


function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/register' element={<Register/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;

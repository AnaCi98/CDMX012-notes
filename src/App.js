import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import './App.css';
import Login from './components/login.js';
import Home from './components/home.js';


function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/home' element={<Home/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;

/* eslint-disable react/prop-types */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import CreateNote from './components/Dashboard/CreateNote';
import EditNotes from './components/Dashboard/EditNote';

function Paths(props) {
  const { user, loginGoogle, getOutSession } = props;
  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<Login loginGoogle={loginGoogle} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/home" element={<Dashboard user={user} getOutSession={getOutSession} />} />
      <Route path="/note" element={<CreateNote />} />
      <Route path="/editnote:id" element={<EditNotes />} />
    </Routes>
  );
}

export default Paths;

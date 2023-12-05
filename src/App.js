import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Signup from './sign up';
import './App.css';
import { useEffect, useState } from 'react';
import { Del } from './login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} /> 
          <Route path="/home" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} /> 
          <Route path="/sign up" element={<Signup setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/login" element={<Del />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
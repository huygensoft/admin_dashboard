import React from 'react';
import { Routes, Route } from 'react-router-dom'
import NavBar from './layouts/navbar/NavBar';
// Sign-Ups
import SignUp from './components/login/SignUp'
import Forgot from './components/login/Forgot'
import SignReset from './components/login/SignReset'

// Dashboard
import Dashboard from './components/dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />

        <Routes>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/forgot' element={<Forgot />} />
            <Route path='/signreset' element={<SignReset />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;

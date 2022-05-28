
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import DetailsPage from './pages/DetailsPage';
import PostAd from './pages/PostAd';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/details' element={<DetailsPage />} />
          <Route path='/postad' element={<PostAd />} />

        </Routes>
      </Router>

    </>
  );
}

export default App;

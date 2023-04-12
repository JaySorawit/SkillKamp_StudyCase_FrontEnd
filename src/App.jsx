import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';

import Promotion from './components/Promotion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import OurStory from './components/OurStory';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Cart from './components/Cart';
import './App.css';

// const API_URL = 'https://skillkamp-api.com'

export const DataContext = createContext();

function App() {
  const location = useLocation();

  // useEffect(() => {
  //   axios.get(API_URL).then(res => setData(res.data))
  // }, [])

  return (
    <div className="App">
      {location.pathname !== '/Login' && (
        <div className="promotion">
          <Promotion />
        </div>
      )}
      {location.pathname !== '/Login' && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      {location.pathname !== '/Login' && <Footer />}
    </div>
  );
}

export default App;

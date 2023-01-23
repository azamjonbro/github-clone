import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NavPartSec from './components/NavPartSec'
import Home from './pages/Home'
const App = () => {
  return (
    <>
    <Navbar/>
    <NavPartSec/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
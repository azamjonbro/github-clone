import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NavPartSec from './components/NavPartSec'
import Home from './pages/Home'
import Repo from './pages/Repos'
import ProfilUser from './components/Profile'
import Error from './pages/error'
import Potpis from './pages/potpis/potpis'
const App = () => {
  return (
    <>
    <Navbar/>
    <NavPartSec/>
      <main>
        <ProfilUser/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/repositories' element={<Repo/>}/>
        <Route path='/follow' element={<Potpis/>}/>
        
    <Route path='/*' element={<Error/>}/>
      </Routes>
    
      </main>
    <Footer/>
    </>
  );
};

export default App;
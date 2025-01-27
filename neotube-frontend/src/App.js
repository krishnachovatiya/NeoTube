import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import {Route, Routes} from 'react-router-dom';
import Video from './Pages/Video/Video';

function App() {
  const[sidenavbar,setSideNavbar]=useState(true);

  const setSideNavbarFunc=(value)=>{
    setSideNavbar(value);
  }
  return (
    <div className="App">
      <Navbar setSideNavbarFunc={setSideNavbarFunc} sidenavbar={sidenavbar}/>
      <Routes>
        <Route path='/' element={<Home sidenavbar={sidenavbar}/>} />
        <Route path='/watch/:id' element={<Video/>} />
      </Routes>
      
    </div>
  );
}

export default App;

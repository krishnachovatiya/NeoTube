import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import {Link, Route, Routes} from 'react-router-dom';
import Video from './Pages/Video/Video';
import Profile from './Pages/Profile/Profile';
import VideoUpload from './Pages/VideoUpload/VideoUpload';
import SignUp from './Pages/SignUp/SignUp';

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
        <Route path='/user/:id' element={<Profile sidenavbar={sidenavbar}/>} />
        <Route path='/:id/upload' element={<VideoUpload/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
      
    </div>
  );
}

export default App;

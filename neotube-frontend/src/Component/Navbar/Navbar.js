import React, { useState } from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SideNavbar from '../SideNavbar/SideNavbar';

const Navbar = ({setSideNavbarFunc,sidenavbar}) => {

  const [userPic, setUserPic] = useState("https://media.istockphoto.com/id/1087531642/vector/male-face-silhouette-or-icon-man-avatar-profile-unknown-or-anonymous-person-vector.jpg?s=612x612&w=0&k=20&c=FEppaMMfyIYV2HJ6Ty8tLmPL1GX6Tz9u9Y8SCRrkD-o=")
  const[navbarModal, setNavbarModal] =useState(false);

  const handleClickModal=()=>{
    setNavbarModal(prev=>!prev);
  }

  const sideNavbarFunc=()=>{
    setSideNavbarFunc(!sidenavbar)
  }

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <div className="menuiconss" onClick={sideNavbarFunc}>
          <MenuIcon sx={{ color: "white" }} />
        </div>
        <div className="navbar_youtubeImg">
          <YouTubeIcon sx={{ color: "red", fontSize: "34px" }} className='navbar_youtubeImage' />
          <div className="navbar_youtubeTitle">NeoTube</div>
        </div>
      </div>

      <div className="navbar_middle">
        <div className="navbar_searchBox">
          <input type="text" placeholder="Search" className='navbar_searchBoxInput' />
          <div className="navbar_searchIconBox">
            <SearchIcon sx={{ color: "white", fontSize: "28px" }} />
          </div>
        </div>
        <div className="navbar_mic">
          <KeyboardVoiceIcon sx={{ color: "white" }} />
        </div>
      </div>

      <div className="navbar_right">
        <VideoCallIcon sx={{ color: "white", fontSize: "30px", cursor: "pointer" }} />
        <NotificationsIcon sx={{ color: "white", fontSize: "30px", cursor: "pointer" }} />
        <img onClick={handleClickModal} src={userPic} className='navbar-right-logo' alt='Logo' />

      {navbarModal && 
        <div className="navbar_modal">
        <div className="navbar_modal_option">Profile</div>
        <div className="navbar_modal_option">Logout</div>
        <div className="navbar_modal_option">Login</div>
      </div>}

      </div>
    </div>
  )
}

export default Navbar

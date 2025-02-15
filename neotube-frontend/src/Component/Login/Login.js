import React from 'react'
import './Login.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Login = ({setLoginModal}) => {
  return (
    <div className='login'>
    <div className="login_card">
        <div className="titleCard_login">
            <YouTubeIcon sx={{ fontSize: "54px" }} className='login_youtubeImage' />
            Login
        </div>

    <div className="loginCredentials">
        <div className="userNameLogin">
            <input type="text" className="userNameLoginUserName" placeholder='userName'/>
        </div>

        <div className="userNameLogin">
            <input type="password" className="userNameLoginUserName" placeholder='Password'/>
        </div>

    </div>

        <div className="login_buttons">
            <div className="login-btn" >Login</div>
            <Link to={'/signup'} onClick={()=>setLoginModal()} className="login-btn">SignUp</Link>
            <div className="login-btn" onClick={()=>setLoginModal()} >Cancel</div>
        </div>

        {/* Please watch the video for the code} */}


    </div>
    <ToastContainer />
</div>
  )
}

export default Login

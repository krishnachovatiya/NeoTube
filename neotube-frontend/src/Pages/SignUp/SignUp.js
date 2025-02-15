import React from 'react'
import './SignUp.css'
import { Link,useNavigate } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const SignUp = () => {
  return (
    <div className='signUp'>
            <div className="signup_card">
                <div className="signUp_title">
                    <YouTubeIcon sx={{ fontSize: "54px" }} className='login_youtubeImage' />
                    SignUp
                </div>

                <div className="signUp_Inputs">
                    
                <input type="text" className="signUp_Inputs_inp" placeholder='Channel Name'/>
                <input type="text" className="signUp_Inputs_inp" placeholder='User Name'/>
                <input type="password" className="signUp_Inputs_inp" placeholder='Password'/>
                <input type="text" className="signUp_Inputs_inp" placeholder='About your Chanel'/>


                    <div className="image_upload_signup">
                        <input type='file' onChange={(e) => uploadImage(e)} />
                        <div className='image_upload_signup_div'>
                            <img className='image_default_signUp' src={uploadedImageUrl} />
                        </div>
                    </div>


                    <div className="signUpBtns">
                        <div className="signUpBtn" onClick={handleSignup}>SignUp</div>
                        <Link to={'/'} className="signUpBtn">Home Page</Link>

                    </div>

                    {progressBar && <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>}

                </div>

            </div>
            <ToastContainer />
        </div>
  )
}

export default SignUp

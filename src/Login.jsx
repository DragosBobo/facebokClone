
import React from 'react'

import "./Login.css";
import { Button } from '@mui/material';

function Login() {

  return (
    <div className='login'>
<div className="login__logo">

    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" />

    
    
</div>
<Button type='submit' >Sign in</Button>

    </div>
  )
}

export default Login
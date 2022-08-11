import { Button } from '@mui/material';
import React from 'react'
import img from "../assets/logo.jpg";
import {auth,provider} from "../firebase";
import {useDispatch} from "react-redux";
import login from '../Redux/action';

const Login = () => {
const dispatch = useDispatch();
  const handleLogin = (e) => {
    auth.signInWithPopup(provider).then((result)=>{
console.log(result);

dispatch(login(result.user));





    }).catch((err)=>{
      alert(err.message);
      console.log(err);
    })

  }
  return (
    <div className="login">
      <div className="login__container">
        <img src={img} alt="logo"/>
        <h1>Sign in to Cool Developer HQ</h1>
        <p>cooldeveloper.slack.com</p>
        <Button onClick={handleLogin}>Sign In with Google</Button>
      </div>
    </div>
  )
}

export default Login
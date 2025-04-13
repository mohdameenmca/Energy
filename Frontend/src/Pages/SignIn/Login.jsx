import React, { useState } from 'react'
import './form.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Login() {
    
    const [Login,setLogin]=useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.pwd.value
        const AuthCredentials=
        {
            email:e.target.email.value,
            password:e.target.pwd.value
        }
        setLogin(AuthCredentials)
        // console.log(AuthCredentials)

         signInWithEmailAndPassword(auth,email,password).then((authUser)=>{
            console.log("Login Success");
            navigate('/');
          
         })
         .catch((err)=>{
            console.log("Invalid Crendientials",err.message)
         })

    }


  return (
    <form className='form' onSubmit={handleSubmit}>
        <input type='text' name='email' placeholder='Email Address 'required/>
        <input type='password' name='pwd' placeholder='Enter password '/>
        <input type='submit' value="Login"/>

        <Link to='/Signup'>New Account</Link>
    </form>
  )
}

export default Login
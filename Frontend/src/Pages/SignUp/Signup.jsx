import React, { useEffect, useState } from 'react';
import {db,addDoc,collection, auth } from '../../firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../../Components/Nav/Navigation';
function Signup() {
  const [register, setRegister] = useState({});
  const [error, setError] = useState(''); 
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const email= e.target.email.value;
    const currentPassword = e.target.currentPassword.value;
    const confirmpassword = e.target.confirmpassword.value;

    if(currentPassword!==confirmpassword){
      setError("Password is not match");
    }
    createUserWithEmailAndPassword(auth,email,currentPassword).then((authUser)=>{
      console.log("User created")
    }
    )
    .catch((err)=>{
      console.log(err.message)
    })
    // Creating an object with values from the form
    const userDetails = {
      fname: e.target.fname.value,
      lname: e.target.lname.value,
      email: e.target.email.value,
      gasno: e.target.gasNo.value,
      Ebno: e.target.ebNo.value,
      address : e.target.address.value,
      pincode : e.target.pincode.value
    };


   

    // Updating the state with the user details
    setRegister(userDetails);
    try{
      const res = await fetch(apiUrl+"/registeruser",{
        method:"POST",
        headers:{
              'Content-Type':'application/json'
        },
        body:JSON.stringify(userDetails)
      });
      
      if(res.ok){
        const data = await res.json();
        console.log("Registration Success",data)
        navigate('/Signin')
      }
      else{
        const errordata = await res.json();
        console.log("Registration Failed",errordata)
      }
    }
    catch(e){
      console.log(e.message);
    }
     
    
  
  };


  //API Intregration - POST 



  return (
 <>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" name="fname" required/>
        <input type="text" placeholder="Last Name" name="lname" />
        <input type="text" placeholder="Email Address" name="email" required/>
        <input type="text" placeholder="Gas Number" name="gasNo" required/>
        <input type="text" placeholder="Electricity Number" name="ebNo" required/>
        <input type="text" placeholder="Address" name="address" required/>
        <input type="text" placeholder=" Pincode" name="pincode" required/>
        <input type="password" placeholder="New password" name="currentPassword" required/>
        <input type="password" placeholder="Confirm password" name="confirmpassword" required/>
        <input type="submit" value="Register Now" />
        <Link to='/Signin'>Log In</Link>
      </form>
      {error&&<p>{error}</p>}
    </>
  );
}

export default Signup;

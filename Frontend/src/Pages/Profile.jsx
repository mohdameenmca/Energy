import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header/Header'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
function Profile() {

  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const logout=()=>{
    signOut(auth);
    navigate('/');
  }

  return (
    <div className='MainPage'>
     
      <h5>{user.email }</h5>
      <button onClick={logout}>Log Out</button>
      </div>
  )
}

export default Profile
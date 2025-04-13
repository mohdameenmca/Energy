import logo from './logo.svg';
import './App.css';

import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Overview from './Pages/Overview';
import Profile from './Pages/Profile';
import Bills from './Pages/Bills';
import SignIn from './Pages/SignIn/Login'
import Signup from './Pages/SignUp/Signup';
import { useEffect, useState } from 'react';
import Reading from './Pages/Readings/Reading';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase'

function App() {
  
  //Redux Concept for Auth 

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
      const userValidation =onAuthStateChanged(auth,(userAuth)=>{
        if(userAuth){
          dispatch(login({
            uid:userAuth.id,
            email:userAuth.email
          }));
          // navigate('/')
        }
        else{
          dispatch(logout());
        }
      })
      return userValidation
  },[])
  return (
    <BrowserRouter>
      <div className="App">
        {
          !user ?
          <>
        
          <Routes>
            <Route path='/' element={<Home/>}/>
            
            <Route path='/Signin' element={<SignIn/>}/>
            
            <Route path='/Signup' element={<Signup/>}/>
          </Routes>
          </>
          :
          <>
          <Dashboard/>
          <Routes>
        <Route path='/' element={<Overview/>}/>
        <Route path='/bills' element={<Bills/>}/>
        <Route path='/reading' element={<Reading/>}/>
        <Route path='/profile' element={<Profile/>}/>

      </Routes>
      </>
        }
       

    
      
      </div>
    </BrowserRouter>
    
  );
}

export default App;

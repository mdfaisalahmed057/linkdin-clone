import React, { useEffect } from 'react';
//  import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header'
import { logout,login, selectuser } from './features/userSlice';
import Sidebar from './Sidebar'
import Feed from './Feed'
import Login from './Login';
import {auth} from './firebase'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Widget from './Widget';

function App() {
  const user=useSelector(selectuser)
  const dispatch=useDispatch()
  
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
 if(userAuth){
  dispatch(
    login({
    email:userAuth.email,
    uid:userAuth.uid,
    displayName:userAuth.displayName,
    photoURL:userAuth.profilePic,
  }))
  
 }
 else{
dispatch(logout())
 }
    })
  },[])
  return (

     
    <div className='app'>
   <Header/>
   {!user ?(
    <Login/>
   ):(
    <div className='app__body'>
    <Sidebar/>
    <Feed/>
    <Widget/>
       </div>
   )}
 </div>
  );
}

export default App;

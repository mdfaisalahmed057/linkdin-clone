import React  from 'react'
import { useState } from 'react';
import './Login.css'
import {auth} from'./firebase'
import { useDispatch } from 'react-redux';
import {login} from './features/userSlice';
  

function Login() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [profilePic,setprofilePic]=useState("");
const dispatch=useDispatch()
 
    const  loginToApp=(e)=>
    {
e.preventDefault()
auth.signInWithEmailAndPassword(email,password)
.then(userAuth=>{
  dispatch(login({
    email:userAuth.email,
    uid:userAuth.user.uid,
    displayName:userAuth.user.displayName,
    profileUrl:userAuth.user.photoURL
  }))
  

}).catch((error)=>alert(error))
    }
    const  register=()=>
    {
      if(!name){
         alert("please enter the full name")
      }
     auth.createUserWithEmailAndPassword(email,password)
     .then((userAuth)=>{
      userAuth.user.updateProfile({
       displayName:name,
       photoURL:profilePic,
      })
      .then(()=>{
        dispatch(login({
       email:userAuth.user.email,
       uid:userAuth.user.uid,
       displayName:userAuth.displayName,
       photoURL:userAuth.profilePic,

        }))
      })

     }).catch((error)=>alert(error))

    }
  return (
      <div className='login'>
          <img src="https://www.onrec.com/sites/onrec/directory/files/Linkedin-Logo.png" alt="login__image" />
     
 <form>
<input value={name} onChange={e=>setName(e.target.value)} placeholder='FUll name (required if registering)'type="text"/>
<input value={email} onChange={e=>setEmail(e.target.value)} placeholder= 'Email  (required if registering)'type="email"/>
<input value={profilePic} onChange={e=>setprofilePic(e.target.value)} placeholder='PhototUrl (required if registering)'type="text"/>
<input value={password} onChange={e=>setPassword(e.target.value)} placeholder=' Password (required if registering)'type="password"/>
<button type='submit' onClick={loginToApp}>Sign in</button>
 </form>
 <p>Not a member?  {"  "}
    <span onClick={register} className='login__register'>Regiseter Now</span>
 </p>
 </div>

  )
}

export default Login
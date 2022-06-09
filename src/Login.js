import React from 'react'
import './Login.css'
import {auth} from'./firebase'


function Login() {
    const  loginToApp=()=>
    {
        

    }
    const  register=()=>
    {

    }
  return (
      <div className='login'>
          <img src="https://www.onrec.com/sites/onrec/directory/files/Linkedin-Logo.png" alt="login__image" />
     
 <form>
<input placeholder='FUll name (required if registering)'type="text"/>
<input placeholder='profule pic in URL optional)'type="email"/>
<input placeholder='FUll name (required if registering)'type="text"/>
<input placeholder=' Password (required if registering)'type="password"/>
<button type='submit' onClick={loginToApp}>Sign in</button>
 </form>
 <p>Not a member?  {"  "}
    <span onClick={register} className='login__register'>Regiseter Now</span>
 </p>
 </div>

  )
}

export default Login
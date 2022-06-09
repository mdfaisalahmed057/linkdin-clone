import React from 'react';
//  import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header'
import { selectuser } from './features/userSlice';
import Sidebar from './Sidebar'
import Feed from './Feed'
import Login from './Login';
import { useSelector } from 'react-redux';
 


function App() {
  const user=useSelector(selectuser)
  return (

     
    <div className='app'>
   <Header/>
   {!user ?(
    <Login/>
   ):(
    <div className='app__body'>
    <Sidebar/>
    <Feed/>
       </div>
   )}
 </div>
  );
}

export default App;

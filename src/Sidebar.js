import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import {   useSelector } from 'react-redux'
import { selectuser } from './features/userSlice'
 




function Sidebar() {

    const user=useSelector(selectuser)
    
    
    return (

        <div className='sidebar'>

            <div className='sidebar__top'>
                <img
                    src='https://media.istockphoto.com/illustrations/holographic-foil-background-multi-color-gradient-blurry-pattern-illustration-id922659570?k=6&m=922659570&s=170667a&w=0&h=dz3GUJc5epudmglhnz3e83y0Dw5iaZKp6m-ICf-CfrU=' alt='' />
                <Avatar src={user.photoURl} className='sidebar__avatar' >{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>who vieed your profile</p>
                    <p className='sidebar__statNumber'>2,333</p>
                </div>
                <div className='sidebar__stat'>
                    <p>who vieed your profile</p>
                    <p className='sidebar__statNumber'>2,333</p>
                </div>
            </div>
            <div className='sidebar__bottom'>
                 <h2>#recent</h2>
                <p>#react</p>
                <p>#software Engineering</p>
                <p>#Node Js</p>
                <p>#Mongo DB</p>
                </div>
            </div>
 
     
    )
}

export default Sidebar    //  const recentItem=(topic)=>{
    //     <div className='sidebar__recentItem'>
    //         <span className='sidebar__hash'>#</span>
    //         <p>{topic}</p>
    //     </div>
    // }
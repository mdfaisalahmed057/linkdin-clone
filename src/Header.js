import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WorkIcon from '@mui/icons-material/Work';
import HeaderOption from './HeaderOption';
import {auth} from './firebase'
import { useDispatch } from 'react-redux';
import {logout} from './features/userSlice';

function Header() {
    const dispatch=useDispatch()
    const logoutApp=()=>{
        dispatch(logout())
            auth.signOut()
    }
    return (
        <>
            <div className='header'>
                <div className='header__left'>
                    <img src="https://pngmind.com/wp-content/uploads/2019/08/Linkedin-Logo-Png-Transparent-Background-1.png" alt="" />


                    <div className='header__search'>
                        <SearchIcon />
                        <input className="input-header" type='text' placeholder='Search.....' />
                    </div>
                </div>

                <div className='header__right'>
                    <HeaderOption Icon={HomeIcon} title="home" />
                    <HeaderOption Icon={SupervisorAccountIcon} title="My network" />
                    <HeaderOption Icon={ChatIcon} title="Chat" />
                    <HeaderOption Icon={NotificationsIcon} title="My network" />
                    <HeaderOption Icon={WorkIcon} title="Jobs" />
                    <HeaderOption    avatar={true}
                         title="logout" onClick={logoutApp}/>

                </div>
            </div>
        </>
    )
}

export default Header
import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WorkIcon from '@mui/icons-material/Work';
import HeaderOption from './HeaderOption';

function Header() {
    return (
        <>
            <div className='header'>
                <div className='header__left'>
                    <img src="https://pngmind.com/wp-content/uploads/2019/08/Linkedin-Logo-Png-Transparent-Background-1.png" alt="" />


                    <div className='header__search'>
                        <SearchIcon />
                        <input type='text' placeholder='Search.....' />
                    </div>
                </div>

                <div className='header__right'>
                    <HeaderOption Icon={HomeIcon} title="home" />
                    <HeaderOption Icon={SupervisorAccountIcon} title="My network" />
                    <HeaderOption Icon={ChatIcon} title="Chat" />
                    <HeaderOption Icon={NotificationsIcon} title="My network" />
                    <HeaderOption Icon={WorkIcon} title="Jobs" />
                    <HeaderOption avatar='https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=338&ext=jpg&ga=GA1.2.434993186.1654322310'
                     title="me" />

                </div>
            </div>
        </>
    )
}

export default Header
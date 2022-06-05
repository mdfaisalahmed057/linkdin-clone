import React from 'react'
import './Feed.css'
 import CreateIcon from '@mui/icons-material/Create';
 import ImageIcon from '@mui/icons-material/Image';
 import EventNoteIcon from '@mui/icons-material/EventNote';
 import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
 import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post'
 
function Feed() {
  return (
     <div className='feed'>
         <div className='feed__inputContainer'>
             <div className='feed__input'>
                 <CreateIcon/>
               <form>
                   <input type="text"/>
                   <button type='submit'> send</button>
                   
                </form>                     
             </div>
             <div className='feed__inputOption'>
               <InputOption Icon={ImageIcon} title="photo" color='#7005f9'/>
               <InputOption Icon={SubscriptionsIcon} title="video" color='#E7a33e'/>
               <InputOption Icon={EventNoteIcon} title="Event" color='#c0cbcd'/>
               <InputOption Icon={CalendarViewDayIcon} title="Write Article" color='#7fc15e'/>

             </div>

         </div>
         <Post/>
</div>
  )
}

export default Feed
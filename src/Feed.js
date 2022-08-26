import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import  './Feed.css'
// import styles from "./App.module.css";

import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase'
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
 import FlipMove from 'react-flip-move';
import { selectuser } from './features/userSlice'
import { useSelector } from 'react-redux';
import Modal from './Modal';



function Feed( ) {
  const user=useSelector(selectuser)

  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
  db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) => 
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

  }, [posts])
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name:user.displayName ,
      description:  user.email,
      message: input,
      photoUrl: user.photoUrl||"",
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }
  return (
    // <Postmodal/>
    <>

    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          
          <CreateIcon />
          {/* <Postmodal/> */}
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit" > send</button>
           
          </form>
        </div>
        <div className='feed__inputOption'>
          <InputOption Icon={ImageIcon} title="photo" color='#7005f9' />
          <InputOption Icon={SubscriptionsIcon} title="video" color='#E7a33e' />
          <InputOption Icon={EventNoteIcon} title="Event" color='#c0cbcd' />
          <InputOption Icon={CalendarViewDayIcon} title="Write Article" color='#7fc15e' />


          {/* <button className={styles.primaryBtn} onClick={() => setIsOpen(true)} >close modal
          {isOpen && <Postmodal setIsOpen={setIsOpen} />}
 <InputOption Icon={CalendarViewDayIcon} title="Write Article" color='#7fc15e' /></button> */}
         
        </div>
      </div>
      <FlipMove>
      {posts.map(({id,data:{name,description,message,photoUrl}})=>(
        <Post
        key={id}
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}/>
      ))}
    

      </FlipMove>
      
      
    </div>
    </>
  )
}

export default Feed
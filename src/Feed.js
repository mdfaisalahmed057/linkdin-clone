import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import FlipMove from 'react-flip-move';
function Feed() {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) => 
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

  }, [])
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "faisal",
      description: "this is fine",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }
  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
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
  )
}

export default Feed
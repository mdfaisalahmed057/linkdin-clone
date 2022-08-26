// import React from 'react'
import { Avatar } from '@mui/material'
 import './Post.css'
 import React,{forwardRef} from 'react'
import {  ChatOutlined, ShareOutlined, ThumbUpAltOutlined,SendOutlined } from '@mui/icons-material'
import InputOption from './InputOption'

const Post=forwardRef( ({name,description,message,photoUrl},ref)=> {
  return (
    <div ref={ref} className='post'>
        <div className='post__header'>
          <Avatar className='avatar' src={photoUrl}>{name[0]}</Avatar>
          <div className='post__info'>
            <h2>{name}</h2>
           <span className='desc'> {description}</span>
          </div>
        </div>
        <div className='post__body'>
          <p> {message} </p>
        </div>
        <div className='post__buttons'>
          <InputOption Icon={ThumbUpAltOutlined} title="Like" color='gray'/>
          <InputOption Icon={ChatOutlined} title="Chat" color='gray'/>
          <InputOption Icon={ SendOutlined} title="Send" color='gray'/>
          <InputOption Icon={ShareOutlined} title="Share" color='gray'/>


        </div>

    </div>
  )
})

export default Post
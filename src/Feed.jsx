import React from 'react'
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
function Feed( ) {
  return (
    <div className='feed'> 
    <StoryReel/>
    <MessageSender/>
    <Post profilePic="https://scontent.ftsr1-2.fna.fbcdn.net/v/t39.30808-1/261398703_4339500649491565_8151971164601361986_n.jpg?stp=dst-jpg_p240x240&_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=FfT0n9nIbdUAX-DiAk7&_nc_ht=scontent.ftsr1-2.fna&oh=00_AT9gpH3aGKIr6wsoMD8AFEwDzlN4QdvRpzptWtqNDe6nUg&oe=621986F5"
     image="https://images.unsplash.com/photo-1638913974023-cef988e81629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
     username="Dragos "
     timestamp=" this is timestamp"
     message=" this is a message..." />
    
     <Post profilePic="https://scontent.ftsr1-2.fna.fbcdn.net/v/t39.30808-1/261398703_4339500649491565_8151971164601361986_n.jpg?stp=dst-jpg_p240x240&_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=FfT0n9nIbdUAX-DiAk7&_nc_ht=scontent.ftsr1-2.fna&oh=00_AT9gpH3aGKIr6wsoMD8AFEwDzlN4QdvRpzptWtqNDe6nUg&oe=621986F5"
    
     username="Dragos "
     timestamp=" this is timestamp"
     message=" this is a message..." />
    </div>
  )
}

export default Feed
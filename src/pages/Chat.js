import React from 'react'
import "../styles/chat.scss"
import { useParams } from 'react-router-dom'
const Chat = () => {
    const params = useParams();
  return (
   <>
   <div className="chat-parent parent">
   <h2>ID is: {params.uniqueId}</h2>
   </div>
   
   </>
  )
}

export default Chat

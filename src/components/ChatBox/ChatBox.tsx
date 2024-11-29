import React from 'react'
import "./ChatBox.css";
import ChatBoxHeader from '../ChatBoxHeader/ChatBoxHeader';
import ChatBoxContent from '../ChatBoxContent/ChatBoxContent';

type Props = {}

function ChatBox(props: Props) {
  return (
    <div className='chat-box'>
        <ChatBoxHeader/>
        <ChatBoxContent/>
    </div>
  )
}

export default ChatBox;
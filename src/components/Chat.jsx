import React from 'react'
import { Container } from '../style/StyledChat'
import ChatInput from './ChatInput';
import ChatNav from './ChatNav';
import Messages from './Messages';
const Chat = () => {
  return (
    <Container>
      <ChatNav />
      <Messages/>
      <ChatInput/>
    </Container>
  )
}

export default Chat

import React from 'react'
import Message from './Message'
import { MessagesContainer } from '../style/StyledChat'

const Messages = () => {

  return (
    <MessagesContainer>
      <Message />
      <Message />
          
    </MessagesContainer>
  )
}

export default Messages

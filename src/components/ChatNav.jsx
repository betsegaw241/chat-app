import React from 'react'
import { Navbar,ChatMenu } from '../style/StyledChat'
import Chats from './Chats'
import addUser from '../Assets/add-user.png'
import videoCall from '../Assets/video.png'
const ChatNav = () => {
  return (
     <Navbar>
      {/* <Chats/> */}
      <ChatMenu>
        <div>
          <img src={addUser} alt="add user" width="30" />
        </div>
        <div>
          <img src={videoCall} alt="video call" width="30" />
        </div>
      </ChatMenu>
    </Navbar>
  )
}

export default ChatNav
 
import React from 'react'
import { Navbar,ChatMenu,NavIcon,Menu,L_Button} from '../style/StyledChat'
import Chats from './Chats'
import addUser from '../Assets/add-user.png'
import videoCall from '../Assets/video.png'
import menuIcon from '../Assets/menu.png'

const ChatNav = () => {
  return (
    <Navbar>
      <Menu>
        <img src={menuIcon} alt="menu"  width="30"/>
      </Menu>
      {/* <Chats/> */}
      <ChatMenu>
        <div>
          <NavIcon src={addUser} alt="add user" width="30" />
        </div>
        <div>
          <NavIcon src={videoCall} alt="video call" width="30" />
        </div>
        
     
      <div>
              <L_Button onClick={()=>{console.log("logout")}} >logout</L_Button>
        </div>
      </ChatMenu>
    </Navbar>
  )
}

export default ChatNav
 
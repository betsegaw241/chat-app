import React from 'react'
import { Container, Image, Profile } from '../style/StyledChats'
import profileImage from '../Assets/download.jpg'
const Chat = () => {
  return (
      <Container>
          <Profile>
          <div>
              <Image src={profileImage} alt="profile picture"/>
          </div>
          <div>
              profile name
            </div>
          </Profile>
          <div>
              Current message
          </div>
    </Container>
  )
}

export default Chat

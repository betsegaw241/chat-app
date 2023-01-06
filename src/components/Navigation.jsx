import React from 'react'
import { Navbar, User, Avatar, Button } from '../style/StyledSideBar'
import { Container, Image, NavProfile } from '../style/StyledChats'
import profileImage from '../Assets/download.jpg'
const Navigation = () => {
  return (
    <Navbar>
          <div>LILmoney</div>
      <div>
         <NavProfile>
          <div>
              <Image src={profileImage} alt="profile picture" />
          </div>
          <div>
              profile_name
            </div>
          </NavProfile>
         </div>
          
    </Navbar>
  )
}

export default Navigation

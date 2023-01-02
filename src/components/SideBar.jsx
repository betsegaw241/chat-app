import React from 'react'
import { Container } from '../style/StyledSideBar'
import Chats from './Chats'
import Navigation from './Navigation'
import SearchBox from './SearchBox'


const SideBar = () => {
  return (
    <Container>
     <Navigation />
      <SearchBox />
      <Chats />
      <Chats />
      <Chats />
    </Container>
  )
}

export default SideBar

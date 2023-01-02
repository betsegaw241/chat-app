  import React from 'react'
import { Container } from '../style/StyledHome';
import Chat from './Chat';
import SideBar from './SideBar';

  const Home = () => {
    return (
      <Container>
        <SideBar />
        <Chat />
      </Container>
    )
  }
  
  export default Home
  
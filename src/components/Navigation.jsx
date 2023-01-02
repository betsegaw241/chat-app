import React from 'react'
import { Navbar, User, Avatar,Button } from '../style/StyledSideBar'

const Navigation = () => {
  return (
    <Navbar>
          <div>LILmoney</div>
    
          <div>
              <Button onClick={()=>{console.log("logout")}} >logout</Button>
        </div>
    </Navbar>
  )
}

export default Navigation

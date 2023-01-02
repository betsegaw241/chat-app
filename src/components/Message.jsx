import React from 'react'
import { Card, Status} from '../style/StyledChat'
const Messages = () => {
  return (
    <div>
    <Card>
        <p>message</p>
       
      </Card>
       <Status>
      <p>user</p>
        <p style={{ marginLeft:"1%" }}>date</p>
</Status>
    </div>
  )
}

export default Messages

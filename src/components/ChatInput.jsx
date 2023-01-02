import React from 'react'
import { ChatInputContainer,Icon,Input,Button,Attach} from '../style/StyledChat'
import AttachIcon from '../Assets/attachments.png'
import Img from '../Assets/image-.png'
import SendIcon from '../Assets/right-arrow.png'
const ChatInput = () => {
  return (
      <ChatInputContainer>
          
          <Input type="text" placeholder="Type something..." /> 
      <div>
        <Attach htmlFor="file">
        <Icon src={AttachIcon} alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
        />
        
    
        </Attach>
       
    
          </div>
          <Button>
               <Icon src={SendIcon} alt="" />
          </Button>
    </ChatInputContainer>
  )
}

export default ChatInput

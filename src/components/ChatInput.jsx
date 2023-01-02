import React from 'react'
import { ChatInputContainer,Icon,Input,Button} from '../style/StyledChat'
import Attach from '../Assets/attachments.png'
import Img from '../Assets/image-.png'
import SendIcon from '../Assets/right-arrow.png'
const ChatInput = () => {
  return (
      <ChatInputContainer>
          
          <Input type="text" placeholder="Type something..." /> 
          <div>
        <Icon src={Attach} alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
        />
        <label htmlFor="file">
          <Icon src={Img} alt="" />
        </label>
       
    
          </div>
          <Button>
               <Icon src={SendIcon} alt="" />
          </Button>
    </ChatInputContainer>
  )
}

export default ChatInput

import styled from 'styled-components';

export const Container = styled.div`

display:flex;
flex-direction:column;
height:100%;
width:70%;
 background-color:#F7F7F7;

 @media (max-width: 700px) {
   width:100%;
  }
`;
export const Navbar = styled.div`
background-color: #A084CA;
display:flex;
width:100%;
align-items: center;
justify-content:flex-end;
height:10%;
flex-wrap:wrap;
color:white;
font-size: larger;
font-weight: bold;
padding-top:5px;

`;

export const ChatInputContainer = styled.div`
display : flex;
height:50px;
background-color:white;
width:100%;
justify-content :flex-end;
align-items: center;

position:fixed;

right:0;
 justify-self:flex-end;
bottom:0;
`;

export const Icon = styled.img`
width:30px;
height:30px;
cursor:pointer;
`;

export const NavIcon = styled.img`
border-radius:50px;
padding:6px;
:hover{
   background-color:white;
}
`;

export const Input = styled.input`
height:70%;
border:none;
width:50%;
margin-left:1%;
margin-right:2%;
:active{
    border:none;
}
@media (max-width: 700px) {
   width:100%;

  }
`;

export const Button = styled.button`
margin-left:1%;
border:none;
background-color:transparent;
cursor:pointer;
`;

export const Card = styled.div`
display:flex;
flex-wrap:wrap;
background-color:white;
border-radius:6px;
margin-left:1%;
margin-top:1%;
padding-left:1%;
`;

export const Status = styled.div`
display:flex;
margin-left:1%;
justify-content:flex-end;
p{
    margin:0px;
}
`;

export const MessageContainer = styled.div`
display:flex;
flex-direction:column;
width:50%;
`;

export const MessagesContainer = styled.div`


`;
export const ChatMenu = styled.div`
display :flex;
align-items :center;
justify-content:center;
width:30%;
gap:10px;


`;
export const Menu = styled.div`
border-radius:6px;
padding:2px;
margin-right:auto;
margin-left:3%;

:hover{
    
    background-color:white;
    cursor:pointer;
}

 @media (min-width: 700px) {
   display:none;
  }
`;


export const Attach = styled.label`
opacity:0.3;
`; 
export const L_Button = styled.button`
border:none;
color:black;
background-color:transparent;
cursor:pointer;
font-size:large;
border-radius:5px;
padding:5px;

:hover{
    background-color: #50577A;
}
`
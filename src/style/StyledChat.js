import styled from 'styled-components';

export const Container = styled.div`


height:100%;
width:100%;
background-color:#9cd3db;

`;
export const Navbar = styled.div`
background-color: #1C315E;
display:flex;
width:100%;
align-items: center;
justify-content:space-around;
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
width:76.7%;
align-items:center;
position:fixed;
right:0;
 bottom: 0;
`;
export const Icon = styled.img`
width:30px;
height:30px;
cursor:pointer;

`;
export const Input = styled.input`
height:30px;
border:none;
width:85%;
margin-left:1%;
:active{
    border:none;
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
width:50%;
background-color:white;
border-radius:6px;
margin-left:1%;
margin-top:1%;
padding-left:1%;

`;
export const MessagesContainer = styled.div`


`;
export const Status = styled.div`
display:flex;
margin-left:1%;

p{
   
    margin:0px;
}
`;


import styled from "styled-components";

export const Container = styled.div`
height:100%;
background-color: #50577A;
width:30%;
display:flex;
flex-direction: column;
border: 1px solid black;

`;
export const Navbar = styled.div`
background-color: black;
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
export const User = styled.div`
display :flex;
align-items:center;
font-size:18px;
font-weight:bold;
`;
export const Avatar = styled.img`
width:30px;
height:30px;
border-radius:15px;
margin-right:5px;

`;

export const Button = styled.button`
border:none;
color:white;
background-color:transparent;
cursor:pointer;
font-size:large;
border : 1px solid white;
border-radius:5px;
padding:5px;
:hover{
    background-color: #50577A;
}


`;
export const Input = styled.input`
width:99%;
height:30px;
background:linear-gradient(to right, white , #50577A);
border:none;
color:black;
margin-right:10px;
`;
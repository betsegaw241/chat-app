import styled from "styled-components";

export const Container = styled.div`
height:100%;
background-color: #A084CA;
width:30%;
display:flex;
flex-direction: column;
@media (max-width: 700px) {
    display:none;
  }



`;
export const Navbar = styled.div`
background-color: #645CAA;
display:flex;
width:100%;
align-items: center;
justify-content:space-around;
height:10%;
flex-wrap:wrap;
color:black;
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





export const Input = styled.input`
width:99%;
height:30px;
background:linear-gradient(to right, white , #A084CA);
font-size:large;
border:none;
color:black;
margin-right:10px;
`;
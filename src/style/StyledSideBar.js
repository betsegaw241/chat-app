import styled from "styled-components";

export const Container = styled.div`
height:100%;
background-color: #6D9886;
width:30%;
display:flex;
flex-direction: column;
@media (max-width: 700px) {
    display:none;
  }



`;
export const Navbar = styled.div`
background-color: #C3B091;
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

export const Button = styled.button`
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


`;
export const Input = styled.input`
width:99%;
height:30px;
background:linear-gradient(to right, white , #6D9886);
font-size:large;
border:none;
color:black;
margin-right:10px;
`;
import styled from 'styled-components';

export const Form = styled.form`

  display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   width:100%;
   
`;

export const Container = styled.div`
   margin-top:10%;
   border-radius:5px;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   height:300px;
   width:300px;
   background-color:#fff;
   
span{ 
    color:blue;
    font-weight:bold;
    cursor:pointer;
}
 
`;
export const Input = styled.input`
margin-top:5px;
border-radius:5px;
height:30px;
width:90%;
 outline: 0;
  border-width: 0 0 1px;
  border-color: black;


`;
export const Button = styled.button`
width:200px;
border:none;
height:30px;
margin-top:10px;
font-size:large;
border-radius:5px;
cursor:pointer;
background-color:#252f9a;
color:#fff;
:hover{
  background-color:#6C00FF; 
}
`;
import styled from 'styled-components';

export const Container = styled.div`
display :flex;
justify-content: space-around;
align-items:center;
width:100%;
height:10%;
background-color: white; 
margin-top:1px;
cursor:pointer;
margin-top:1%;


`;
export const Image = styled.img`
width:50px;
hegiht:50px;
border-radius:25px;
margin-right:4px;
`;

export const Profile = styled.div`
display:flex;
align-items: center;
justify-content:space-around;
width:50%;
font-size:large;
font-weight:bold;
`;
export const NavProfile = styled.div`
display:flex;
align-items: center;
justify-content:space-between;
width:100%;
font-size:medium;
font-weight:bold;

img{
    width:30px;
}
`;
import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
width: 200px;
height: 200px;
`
const Box = styled.div`
max-width: 100%;
height: auto;
padding: 2%;
background-color: white;
color: #282c34;
border-radius: 5px;
box-sizing: border-box;
margin: 20px 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export default function Card(props){
    return(
        <Box>
            <Img src = {props.userImg} />
            <h1>{props.name}</h1>
            <h2>{props.username}</h2>
            <p>{props.profile}</p>
            <p>Followers: {props.followers}</p>
            <p>Following: {props.following}</p>
            <p>{props.bio}</p>
        </Box>
    )
}

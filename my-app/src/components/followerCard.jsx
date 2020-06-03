import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
width: 150px;
height: 150px;
`

const Box = styled.div`
max-width: 100%;
background-color: white;
color: #282c34;
border-radius: 5px;
box-sizing: border-box;
margin: 20px 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2%;
`

export default function followerCard(props){
    return(
        <Box>
            <Img src = {props.userImg} />
            <h2>{props.username}</h2>
            <p>{props.profile}</p>
        </Box>
    )
}

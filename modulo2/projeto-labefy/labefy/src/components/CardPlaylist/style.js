import styled from 'styled-components';

export const ContainerPlaylists = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
padding: 5%;
`

export const CardDePlaylist = styled.div`
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
width: 250px;
height: 250px;
padding-top: 0.4em;
margin: 6%;


:hover{
    transform: scale(1.03);
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 2px 2px 20px rgba(255, 255, 255, 0.2);
}

img{
    width: 90%;
    height: 90%;
    padding-bottom: 0.4em;
    background-color: rgba(255, 255, 255, 0.1);
}

p{
   font-family: Arial, Helvetica, sans-serif;
   font-size: 14px;
   background-color: rgba(255, 255, 255, 0.1)
}
`
import styled from 'styled-components'

export const PostContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 95%;
margin: auto;
`
export const PostCard = styled.div`
display: flex;
flex-direction: column;
background-color: rgba(160, 177, 189, 0.1);
border: 1px solid rgb(160, 177, 189);
width: 50%;
height: 180px;
padding: 25px;
margin: 15px 0 15px 0;

@media screen and (max-width: 680px) {
width: 78%;
height: 110px;
padding: 15px;
border-radius: 10px;
}
`

export const PostAuthor = styled.p`
color: gray;
font-weight: bold;
font-size: 12px;
`

export const PostTitle = styled.h3`
padding: 10px 0 5px 0;
`

export const ContainerButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 25%;
padding: 3px;
margin: 8px 0 0 8px;

img {
    width: 18px;
    height: 18px;
}

button {
    border: none;
    padding: 2px;
}
`
export const CommentIconContainer = styled.div`
border: 1px solid  rgb(160, 177, 189);
border-radius: 18px;
display: flex;
padding: 5px;
align-items: center;
`
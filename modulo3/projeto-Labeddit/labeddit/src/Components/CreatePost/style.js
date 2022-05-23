import styled from 'styled-components'

export const FormContainer = styled.div`
border: none;
display: flex;
flex-direction: column;
max-width: 80%;
margin: 30px auto auto auto;
padding: 15px;
`
export const CreateCommentForm = styled.form`
max-width: 100%;

input {
    background-color: #dbdcdd;
    border: none;
    border-radius: 5px;
    width: 95%;
    padding: 8px;
    margin-bottom: 8px;
}

.postContent {
    background-color: #dbdcdd;
    max-width: 95%;
    height: 100px;
    margin-bottom: 8px;

}
`

export const PostButton = styled.button`
@media screen and (max-width: 680px) {
    background-image: linear-gradient(to right, #EE5E43, #FA7D2B, #FBAA41, #FFCA68);
    color: white;
    min-width: 100%;
    margin-bottom:8px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}
`
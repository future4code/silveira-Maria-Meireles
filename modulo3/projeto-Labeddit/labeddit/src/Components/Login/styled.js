import styled from 'styled-components'

export const Form = styled.form`
@media screen and (max-width: 680px) {
display: flex;
flex-direction: column;
}
`
export const FormContainer = styled.div`
@media screen and (max-width: 680px) {
max-width: 100%;
}
`

export const FormInputs = styled.input`
@media screen and (max-width: 680px) {
padding: 10px;
margin: 5px;
}
`

export const FormButtons = styled.button`
@media screen and (max-width: 680px) {
    margin-top: 10px;
    max-width: 100%;
    padding: 10px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}
`
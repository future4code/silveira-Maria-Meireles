import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width: 100%;
    border: 1px solid lightgray;
    height: 2.75rem;
    display: grid;
    grid-template-columns: 24px 1fr 24px;
    justify-items: center;
    align-items: center;
    padding: 0 1rem; 
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
`

export const HeaderTitle = styled.h1`
    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
    text-align: center;
    grid-column-start: 2;
`
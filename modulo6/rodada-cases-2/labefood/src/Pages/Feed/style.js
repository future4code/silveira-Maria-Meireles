import styled from 'styled-components'

export const ContainerFeed = styled.div`
    padding: 0 1rem;
    margin-top: 0.5rem;
`

export const RestaurantCards = styled.div`

`

export const SearchBox = styled.div`
    padding: 0 1rem;
    margin-top: 0.5rem;
`

export const StyledSearchInput = styled.input`
    width: 100%;
    height: 3.5rem;
    padding: 1rem 0.503rem 1rem 1.063rem;
    border-radius: 2px;
    border: 1px solid gray;
`

export const MenuOptions = styled.nav`
    height: 2.625rem;
    display: flex;
    align-items: center;
    padding: 0 1rem 0 0;
    width: 100%;
    overflow-x: auto;
`

export const MenuItem = styled.button`
    font-Family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
    text-align: center;
    color: ${(p) => p.select ? "red" : "black"};
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0 1rem;
`
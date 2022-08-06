import styled from 'styled-components'
import { ReactComponent as Home} from '../../assets/homepage.svg'
import { ReactComponent as Avatar } from '../../assets/avatar.svg'
import { ReactComponent as ShoppingCart} from '../../assets/shopping-cart.svg'

export const MenuContainer = styled.nav`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    height: 3.062rem;
    position: fixed;
    bottom: 0;
    width: 100vw;
    background-color: white;
    z-index: 1;
`

export const ContainerSpace = styled.div`
    height: 3.062rem;
`

export const StyledAvatar = styled(Avatar)`
    fill: ${(p) => p.currentPage ? "red" : "#B8B8B8"};
`

export const StyledHome = styled(Home)`
    fill: ${(p) => p.currentPage ? "red" : "#B8B8B8"};
`

export const SytyledShoppingCart = styled(ShoppingCart)`
    fill: ${(p) => p.currentPage ? "red" : "#B8B8B8"};
`
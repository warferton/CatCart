import { CartButton } from 'components/catalog-page/visual/cart-button.component'
import styled from 'styled-components';

export function Nav(){

    const NavContainer = styled.nav`
        background-color: #FFFFFFEF;
        border: 1.3px grey inset;
        box-shadow: 0px 0px 12px #000000AA;
        display: flex;
        flex-direction: row-reverse;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 999;
    `;

    

    return(
        <NavContainer>
                <CartButton/>
        </NavContainer>
    )
}
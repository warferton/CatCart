import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart as Cart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CartButtonContainer = styled.div`
        padding: 0.3em 1.5em 0.3em 1.5em;
        margin: 1em;
        border: 0.5px transparent inset;
        max-width: 3.35em;
        height: 2rem;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s;
        z-index:10001;

        :hover{
            color: black;
            transition: 0.45s;
            cursor: pointer;
            border: 0.5px black inset;
            box-shadow: 0px 0px 2px black;
        }
    `;

export function CartButton(){
    return (

        <Link to='/cart'>
            <CartButtonContainer>
                <FontAwesomeIcon icon={Cart} size='lg'/>
            </CartButtonContainer>
        </Link>
    )
}
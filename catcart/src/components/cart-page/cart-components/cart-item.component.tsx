import { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus as Plus, faMinus as Minus } from '@fortawesome/free-solid-svg-icons';
import { ICartItem } from 'local-types/cartitem.type';
import CartContext from 'contexts/cart-context';

interface ICartItemProps{ 
    item: ICartItem;
}

const CartItemContainer = styled.div`
    padding: 0.2em;
    height: 4em;
    border-bottom: 1px black solid;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ItemName = styled.p`
    display: block;
    max-height: 3em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    width: 100%;
`;

const ItemControl = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
`;

const Button = styled.button`
    border: 1px transparent solid;
    border-radius: 10px;
    height: 3em;
    background: none;
    transition: 0.3s;
    margin:auto;
    :hover{
        transition: 0.2s;
        border-color: black;
        cursor: pointer;
        box-shadow: 0px 0px 3px #000000FA
    }
`;

const QuantityDisplay = styled.div`
    border: 0.6px grey inset;
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
`;

const ItemPrice = styled.div`
    font-weight: 700;
    margin: 5px;
    width: 50%;
`;

export function CartItem(props: ICartItemProps){

    const {product, quantity} = props.item;

    const {cartContents, setCartContents} = useContext(CartContext);

    const AddItemUnit = () => {
        const contents = cartContents;
        setCartContents(contents.map( item => {
            item.product.id === product.id && 
            item.quantity++;
            return item;
        }))
    }

    const RemoveItemUnit = () => {
        const contents = cartContents;
        
        //decrement if count > 1
        if(quantity > 1) {
            setCartContents(contents.map( item => {
                if(item.product.id === product.id) 
                    item.quantity--;
                return item;
            }))
            return;
        };

        //remove if count <= 1
        if(quantity <= 1){
            setCartContents(contents.filter(item => item.product.id !== product.id));
            return;
        }

    }


    return(
        <CartItemContainer>
            <ItemName>{ product.name }</ItemName>
            <ItemControl>
                <Button onClick={()=> AddItemUnit()}>
                    <FontAwesomeIcon icon={ Plus }/>
                </Button>
                <QuantityDisplay>
                    { quantity }
                </QuantityDisplay>
                <Button onClick={() => RemoveItemUnit()}>
                    <FontAwesomeIcon icon={ Minus }/>
                </Button>
            </ItemControl>
            <ItemPrice>{ product.price }$</ItemPrice>
        </CartItemContainer>
    )

}
import { useState, useContext, useEffect } from 'react';
import styled from "styled-components"
import { CartItem } from 'components/cart-page/cart-components/cart-item.component'
import CartContext from 'contexts/cart-context';


const ItemControl = styled.div`
    margin: 2em;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-self: center;
    width: 75%;
`;

const ItemWindow = styled.div`
    height: 20em;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    border-collapse: collapse
`;

const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: center;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 10px grey; 
    border:1px black solid;
    width: 100%;
`;

const ProceedPayment = styled.div`
    padding: 0.5em;
    position: static;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px black solid;
    box-shadow: 0px -8px 20px #000000CA;
`;

const BuyButton = styled.button`
    padding: 1em 1.5em 1em 1.5em;  
    font-weight: 900;
    font-size: 18px;
    border-radius: 30px;
    border: 1px transparent solid;
    background-color:  #47b2f0;
    box-shadow: 0px 0px 10px grey;
    transition: 0.3s;

    :hover{
        background-color: #52ccf5;
        cursor: pointer;
        box-shadow: 0px 0px 5px grey;
        transition: 0.4s;
    }
    
`;

export function CartTable(){

    const context = useContext(CartContext);

    const [total_price, setTotalPrice] = useState(0);

    useEffect(() => {
        let sum = 0;
        context.cartContents.map(item => sum += (item.quantity * (item.product.price || 0)));
        setTotalPrice(sum);
    }, [context]);

    const cart_items = context.cartContents.map(item => 
        <CartItem item ={ item }/>
    );

    return(
        <ItemControl>
            <TableContainer>
                <ItemWindow>
                    {cart_items}
                </ItemWindow>
                <ProceedPayment>
                    <strong>Total: { total_price }$</strong>
                    <BuyButton onClick={()=> alert(`Bought ${ 4 } items.`)}>Buy</BuyButton>
                </ProceedPayment>
            </TableContainer>
        </ItemControl>
    )
}
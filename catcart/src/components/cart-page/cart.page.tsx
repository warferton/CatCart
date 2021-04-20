import styled from 'styled-components';
import { CartTable } from 'components/cart-page/cart-table.component'

export function CartPage(){
    const Wraper = styled.div`
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 3fr 4fr;
        grid-gap: 3em;
    `;
        
    const CardInputForm = styled.div`
        margin: 3rem 3rem 0 3rem;
        border: 1px black inset;
        box-shadow: 0px 0px 2px white;
        background-color: #FFFFFF;
    `;

    return (
        <Wraper>
            <CardInputForm>
            </CardInputForm>
            <CartTable/>
        </Wraper>
    );
}

export default CartPage;
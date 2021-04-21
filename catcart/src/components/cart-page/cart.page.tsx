import styled from 'styled-components';
import { CartTable } from 'components/cart-page/cart-table.component'
import { StripeContainer as CardPaymentForm } from 'components/cart-page/payment-components/stripe-container.component'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft as Arrow } from '@fortawesome/free-solid-svg-icons'

export function CartPage(){
    const Wraper = styled.div`
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr;
    `;

    const Nav = styled.nav`
        height: 1.5em;
        margin-bottom: 0.4rem;
        padding: 0.3rem 1rem 0.3rem 1rem;
        background-color: #FFFFFF50;
        display:flex;
        align-content: center;
    `

    return (
        <Wraper>
            <Nav>
                <Link to="/">
                    <FontAwesomeIcon icon={ Arrow } size='lg'/> Go Back
                </Link>
            </Nav>
            <CardPaymentForm/>
            <CartTable/>
        </Wraper>
    );
}

export default CartPage;
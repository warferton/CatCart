import styled from 'styled-components';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentForm } from './card-payment.component';
import { BankImages } from 'components/cart-page/payment-components/style-components/bank-iban.component'

const Container = styled.div`
        margin: 1em 0 1em 0;
        padding: 0.5em;
        justify-self: center;
        border: 2px black solid;
        box-shadow: 0px 0px 10px black;
        background-color: #1182FA;
        background-image: url('images/cards/visa');
        width: 45%;
        min-width: 17em;
        height: 15em;
        border-radius: 15px;
   `;

const KEY = "SOME_KEY";

const stripePromise = loadStripe(KEY);

export function StripeContainer(){

    return(
        <Elements stripe={stripePromise}>
            <Container>
                <BankImages/>
                <PaymentForm/>
            </Container>
        </Elements>
    )

}
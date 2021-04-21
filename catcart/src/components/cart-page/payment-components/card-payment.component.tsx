import styled from 'styled-components';
import { CardElement } from '@stripe/react-stripe-js';
import { StripeCardElementOptions } from '@stripe/stripe-js';
import Field from 'components/cart-page/payment-components/form-components/field.component';
import { useState } from 'react';
//import some request sending lib to communicate w/ backend

const FormContainer = styled.div`
       justify-self: center;
       border: 1px black inset;
   `;


const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
        base: {
                iconColor: '#23ef78',
                color: '#000000',
                fontWeight: 500,
                fontFamily: 'Helvetica',
                fontSize: '16px',
                fontSmoothing: 'antialiassed',
                ":-webkit-autofill": { color: '#FCE883'},
                "::placeholder": { color: '#87BBFD' }
        },
        invalid: {
            iconColor: '#ef3423',
            color: '#ef3423'
        }
    }
} as StripeCardElementOptions

export function PaymentForm(props: any){

    const [billingDetails, setBillingDetails] = useState({
        phone: "",
        name: ""
    });


    return(
        <FormContainer>
            <form>
                <Field
                label="Name"
                id="name"
                type="text"
                placeholder="Jane Doe"
                required
                autoComplete="name"
                value={billingDetails.name}
                onChange={(e) => {
                    setBillingDetails({ ...billingDetails, name: e.target.value });
                }}
                />
                <Field
                label="Phone"
                id="phone"
                type="tel"
                placeholder="(941) 555-0123"
                required
                autoComplete="tel"
                value={billingDetails.phone}
                onChange={(e) => {
                    setBillingDetails({ ...billingDetails, phone: e.target.value });
                }}
                />
                <fieldset>
                    <div className="FormRow">
                        <CardElement options={ CARD_OPTIONS } onChange={e => {}}/>
                    </div>
                </fieldset>
            </form>
        </FormContainer>
    )

}
import styled from 'styled-components';
import {Product} from '../products/product.component';

export default function CatalogPage(){

    const ProductDisplay = styled.div`
        display: grid;
        justify-content: space-between;
        align-items: center;
        grid-template-columns: repeat(3, 20rem);
        grid-auto-rows: 15rem;
        grid-gap: 1.2rem;
        border: 2.5px gray inset;
        background-color: white;
        margin: 0.5rem;
        overflow: scroll;
    `

    return (
        <div className="grid-container">
            <ProductDisplay>
                <Product price={3241}/>
                <Product price={41} name='socks'/>
                <Product price={4013}/>
                <Product price={13}/>
            </ProductDisplay>
        </div>

    )
}
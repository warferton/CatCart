import { IProduct } from 'local-types/product.type';
import styled from 'styled-components';

interface ProductProps{
    product: IProduct;
}

export function Product(props : ProductProps): JSX.Element {

    const ProductContainer = styled.div`
        border: 1px black inset;
        background-color: white;
        display: grid;
        grid-template-rows: 2fr 0.7fr 0.3fr 1fr;
        grid-template-columns: 20em;
        grid-gap: 2px;
        justify-content: center;
        align-items: center;
        height: 18em;
        margin: 1em;
        transition: 0.25s;
        overflow: hidden;

        :hover{
            box-shadow: 0px 0px 5px grey;
            transition: 0.3s;
        }
    `;

    const ProductImg = styled.div`
        padding-top: 0.4em;
        height: 9em;
    `;

    const ProductName = styled.div`
        margin: 0.2rem 0.5rem 0.2rem 0.5rem;
        height: 2em;
        overflow: hidden;
        padding: 0.3rem 1rem 0.3rem 1rem;

        p {
            font-weight: bold;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;    
        }
    `;

    const PriceTag = styled.div`
        background-color: #EEEEEEFF;
        p{ 
            font-style: italic;
            font-weight: 600;
            font-size: 15px;
        }
    `;


    const AddButton = styled.button`
        border: none;
        color: black;
        background-color: transparent;

        :hover{
            background-color: #EEEEEEEE;
            cursor: pointer;
        }
    `;


    const {name, price, image} = props.product;

    return(
        <ProductContainer>
            <ProductImg>
                <img src={image} width="120px" height="120px" alt='Product_Img'/>
            </ProductImg>
            <ProductName>
                <p>{name || 'No Product Name'}</p>
            </ProductName>
            <PriceTag>
                <p>{price || 'No pricing'} руб.</p>
            </PriceTag>
            <AddButton>
                <p>ADD TO CART</p>    
            </AddButton>
        </ProductContainer>
    );
}
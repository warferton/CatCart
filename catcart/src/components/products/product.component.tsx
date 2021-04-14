import styled from 'styled-components';

export function Product(props : any): JSX.Element {

    const ProductContainer = styled.div`
        border: 1px black inset;
        background-color: white;
        display: grid;
        grid-template-rows: 2fr 0.7fr .3fr 1fr;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 10em;
        margin: 1em;
    `
    const AddButton = styled.button`
        border: 0.5px orange inset;
        color: black;
    `
    const {price, name} = props;

    return(
        <ProductContainer>
            <img src="" max-width="500px" max-height="500px" alt='Product_Img'/>
            <div className='product-name'>
                <p>{name || 'Product Name'}</p>
            </div>
            <div className='product-price'>
                {price || 'No pricing'}
            </div>
            <AddButton>
                <p>ADD TO CART</p>    
            </AddButton>
        </ProductContainer>
    )
}
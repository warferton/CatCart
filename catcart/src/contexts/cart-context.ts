import { createContext } from 'react';
import { IProduct } from 'local-types/product.type'

export interface ICartProps{
    cartContents: IProduct[];
    setCartContents: (cartContents: IProduct[]) => void;
}

const CartContext = createContext<ICartProps>({
    cartContents: [],
    setCartContents: (products: IProduct[]) => []

});

export default CartContext;
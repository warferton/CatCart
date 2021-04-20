import { createContext } from 'react';
import { ICartItem } from 'local-types/cartitem.type';

export interface ICartProps{
    cartContents: ICartItem[];
    setCartContents: (cartContents: ICartItem[]) => void;
}

const CartContext = createContext<ICartProps>({
    cartContents: [],
    setCartContents: (products: ICartItem[]) => [] as ICartItem[]

});

export default CartContext;
import { useState, useMemo, useEffect }  from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import CatalogPage from "components/catalog-page/catalog.page"
import CartPage from "components/cart-page/cart.page"
import { ICartItem } from 'local-types/cartitem.type';
import CartContext from 'contexts/cart-context';
import './App.css';

function App() {

  const [cartContents, setCartContents] = useState<ICartItem[]>([]);

  useEffect(() => {
    const retrievedData = localStorage.getItem('cart-contents');
    retrievedData ? setCartContents(JSON.parse(retrievedData)) : [] as ICartItem[];
  }, [])

  useEffect(() => {
    localStorage.setItem("cart-contents", JSON.stringify(cartContents));
  }, [cartContents])

  const provider_value = useMemo(() => (
    {cartContents, setCartContents}), 
    [cartContents, setCartContents]
    );

  return (
    <Router>
      <div className="App">
        <CartContext.Provider value={provider_value}>
          <Route path="/" exact component={() => <CatalogPage/>}/>
          <Route path="/cart" exact component={() => <CartPage/>}/>
        </CartContext.Provider>
      </div>
    </Router>
  );
}

export default App;

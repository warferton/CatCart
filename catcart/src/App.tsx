import { useState, useMemo }  from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import CatalogPage from "components/pages/catalog.page"
import CartPage from "components/pages/cart.page"
import { IProduct } from "local-types/product.type"
import CartContext from 'contexts/cart-context';
import './App.css';

function App() {

  const [cartContents, setCartContents] = useState<IProduct[]>([]);

  const provider_value = useMemo(() => ({cartContents, setCartContents}),[cartContents, setCartContents]);

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

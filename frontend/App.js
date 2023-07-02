import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Product from './Product';
import Cart from './Cart';
import Checkout from './Checkout';
import { SignInPrompt, SignOutButton, EducationalText } from './ui-components';


export default function App({ isSignedIn, contractId, wallet }) {
  // Replace with actual data
  const digitalGoods = [{ id: 1, name: 'Digital Good 1' }, { id: 2, name: 'Digital Good 2' }];
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (digitalGood) => {
    // Add item to cart
    setCartItems([...cartItems, digitalGood]);
  };

  const purchase = () => {
    // Purchase items in cart
    alert('Purchased items: ' + cartItems.map(item => item.name).join(', '));
    setCartItems([]);
  };

  if (!isSignedIn) {
    // Sign-in flow will reload the page later
    return <SignInPrompt onClick={() => wallet.signIn()}/>;
  }

  return (
    <Router>
      <SignOutButton accountId={wallet.accountId} onClick={() => wallet.signOut()}/>
      <Routes>
        <Route path="/product/:id">
          <Product digitalGood={digitalGoods[0]} addToCart={addToCart} />
        </Route>
        <Route path="/cart">
          <Cart cartItems={cartItems} />
        </Route>
        <Route path="/checkout">
          <Checkout cartItems={cartItems} purchase={purchase} />
        </Route>
        <Route path="/">
          <Home digitalGoods={digitalGoods} />
        </Route>
      </Routes>
    </Router>
  );
}

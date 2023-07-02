import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ cartItems }) {
  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
        </div>
      ))}
      <Link to="/checkout">Checkout</Link>
    </div>
  );
}


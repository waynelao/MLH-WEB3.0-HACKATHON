import React from 'react';

export default function Checkout({ cartItems, purchase }) {
  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
        </div>
      ))}
      <button onClick={purchase}>Purchase</button>
    </div>
  );
}


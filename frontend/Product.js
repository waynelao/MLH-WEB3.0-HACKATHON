import React from 'react';

export default function Product({ digitalGood, addToCart }) {
  return (
    <div>
      <h1>{digitalGood.name}</h1>
      <p>{digitalGood.description}</p>
      <button onClick={() => addToCart(digitalGood)}>Add to Cart</button>
    </div>
  );
}


import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ digitalGoods }) {
  return (
    <div>
      <h1>Welcome to our DigiMart!</h1>
      {digitalGoods.map((good) => (
        <div key={good.id}>
          <h2>{good.name}</h2>
          <Link to={`/product/${good.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

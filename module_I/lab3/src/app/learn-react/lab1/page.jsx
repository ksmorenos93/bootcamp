"use client";

import {useState} from "react";

export default function Lab1() {
  const [count] = useState(0);
  const [products] = useState([
    {name: 'tablet', price: 100},
    {name: 'Computer', price: 1000},
    {name: 'Phone', price: 500}
  ]);
  
  return (
    <div>
      <h2>{count}</h2>
      <ul>
        {
          products
          .map((item, index) =>
            <li key={index}>{item.name} {item.price}</li>)
        }
      </ul>
    </div>
  )
}
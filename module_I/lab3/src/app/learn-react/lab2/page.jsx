"use client";

import {useState} from "react";

export default function Lab2() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([
    {name: 'tablet', price: 100},
    {name: 'Computer', price: 1000},
    {name: 'Phone', price: 500}
  ]);
  const [coupon, setCoupon] = useState("hola mundo");
  
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
      <h4>Coupon: {coupon}</h4>
      <h2>Modificar elementos</h2>
      <br/>
      <span>Adicionar al conteo</span><button onClick={() => setCount(count + 1)}>Adicionar</button>
      <br/>
      <span>Adicionar producto</span><button onClick={() =>
      setProducts([...products, {name: "watch", price: 200}])}>Adicionar</button>
      <br/>
      <span>Cambiar cupon</span> <button onClick={() => setCoupon("0123458679sdkjghdskhjsgd")}>Cambiar</button>
    </div>);
}
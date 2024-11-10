"use client";

import { useDispatch, useSelector } from "react-redux";
import {decrement, increment} from "lab7/store/counter.slice";

export default function Home() {
  
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);
  
  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  
  return (
    <div className="Home">
      <h1>El valor es: {counter}</h1>
      <button onClick={handleIncrement}>Incremento</button>
      <button onClick={handleDecrement}>Decremento</button>
    </div>
  );
}

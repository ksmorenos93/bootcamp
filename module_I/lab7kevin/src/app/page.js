"use client"


import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "lab7kevin/store/counter.slice";

export default function Home() {

  const dispatch= useDispatch();
  const counter = useSelector(state => state.counter);

  const handleIncrement = () => dispatch(increment())
  const handleDecrement = () => dispatch(decrement())




  return ( 
    <div className="Home">
      <h3>EL VALOR ES: {counter.value}</h3>
      <button onClick= {handleIncrement}>  Incrementar</button>
      <button onClick= {handleDecrement}>  Decrement</button>
    </div>

  );
}

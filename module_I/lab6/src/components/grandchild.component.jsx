"use client";
import { useContext } from "react";
import {CounterContext} from "lab6/context/counter.provider";

const GrandChildComponent = () => {
  const { count, setCount } = useContext(CounterContext);
  
  return (
    <>
      <div>
        <h2>Componente Nieto</h2>
        <small>Usando el estado conteo</small>
      </div>
      <div>
        <h3>El conteo es: {count}</h3>
        <button
          onClick={() => setCount(count + 1)}
        >
          Incrementar valor
        </button>
      </div>
    
    </>
  )
};

export default GrandChildComponent;
"use client";

import {useState} from "react";

export default function Lab4() {
  let [firstName, setFirstName] = useState();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`firstName: ${firstName}`);
  };
  
  const onChange = (event, setValue) => setValue(event.target.value);
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          name="firstName"
          type="text"
          onChange={(event) => onChange(event, setFirstName)}
        />
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  )
}
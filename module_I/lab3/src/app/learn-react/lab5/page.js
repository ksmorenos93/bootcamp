"use client";
import {useInputHook} from "lab3/hooks/use-input-hook";

export default function Lab5() {
  const title = <h1>Hola Learn React</h1>;
  const paragraph = <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias, aliquam aut commodi dolor eaque excepturi fugit inventore iure iusto maxime nulla numquam odio quas qui quibusdam quisquam quos, similique.</p>;
  
  const {value: valueFirstName, bind: bindFirstname, reset: resetFirstname} = useInputHook();
  const {value: valueLastname, bind: bindLastname, reset: resetLastname} = useInputHook();
  
  const handleSubmit = event => {
    event.preventDefault();
    console.log(valueFirstName, valueLastname);
  };
  return (
    <div>
      {title}
      {paragraph}
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          name="firstName"
          type="text"
          {...bindFirstname}
        />
        
        <label>Apellidos:</label>
        <input
          name="lastname"
          type="text"
          {...bindLastname}
        />
        <input type="submit" value="Enviar"/>
      </form>
      <h2>{valueFirstName}</h2>
      <h2>{valueLastname}</h2>
    </div>
  )
}
"use client";

import {useEffect, useState} from "react";

export default function Lab3() {
  const URL = 'https://api.github.com/users';
  let [users, setUsers] = useState([]);
  
  useEffect(()=> {
    fetch(URL)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);
  
  useEffect(() => {
    users && users.length > 0 && setTimeout(() => alert("cargue usuarios"), 2000);
    /*
    if (users && users.length > 0) {
      setTimeout(() => alert("cargue usuarios"), 1000);
    }*/
  }, [users]);
  
   return (
     <div>
       <h2>Usuarios Github</h2>
     <ul>
       {
         users.map((item, index) => <li key={item.node_id}>{item.login} {item.html_url}</li>)
       }
     </ul>
       <h2>otro texto</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad iusto maxime quaerat sit ullam voluptatum? Culpa dignissimos eius error fugit, id laboriosam minus placeat quae quaerat quo sapiente tempora vero.</p>
     </div>
   )
}
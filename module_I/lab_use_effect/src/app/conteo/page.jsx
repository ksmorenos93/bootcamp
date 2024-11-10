"use client";
import { useState, useEffect } from "react";

export default function Conteo() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState(document.title); // State variable for the document title

  // This useEffect sets the initial document title when the component mounts
  useEffect(() => {
    setTitle(` Document title: ${count}`); // Set the state title to the initial count (0)
    document.title = `${count}`; // Set the document title to the initial count (0)
  }, []); // Runs only once when the component mounts

  // This useEffect updates the document title and state title whenever count changes
  useEffect(() => {
    setTitle(`${count}`); // Update the state title
    document.title = `${count}`; // Update the document title
  }, [count]); // Runs every time count changes

  return (
    <div>
      <p>Document title: {title}</p>  {/* Display the current document title from state */}
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Disminuir</button>
    </div>
  );
}

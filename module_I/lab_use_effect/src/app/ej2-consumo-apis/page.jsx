"use client";
import { useState, useEffect } from "react";

export default function UserList() {
  // Estado para almacenar los datos de la API
  const [data, setData] = useState([]);
  // Estado para manejar la carga
  const [loading, setLoading] = useState(true);
  // Estado para manejar errores
  const [error, setError] = useState(null);

  // useEffect para hacer la llamada a la API cuando el componente se monta
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Haciendo la solicitud fetch
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // Comprobando si la respuesta es exitosa
        if (!response.ok) {
          throw new Error("Error en la carga de datos");
        }
        // Almacenando los datos en el estado
        const users = await response.json();
        setData(users);
      } catch (err) {
        // Manejo de errores
        setError(err.message);
      } finally {
        // Actualizando el estado de carga
        setLoading(false);
      }
    };

    fetchData();
  }, []); // El arreglo vacío asegura que se ejecute solo una vez al montar el componente

  // Renderizando el componente
  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

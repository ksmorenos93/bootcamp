"use client"; // Asegúrate de que estás usando este encabezado si estás en un entorno Next.js
import React, { useState, useEffect } from 'react';

export default function FetchComponent() {
    const [data, setData] = useState(null); // Estado para almacenar los datos
    const [isFetching, setIsFetching] = useState(false); // Estado para controlar la solicitud

    // useEffect que solo se ejecuta cuando isFetching es true
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Error en la carga de datos");
                }
                const users = await response.json();
                setData(users);
            } catch (error) {
                console.error(error);
            }
        };

        // Solo llama a fetchData si isFetching es true
        if (isFetching) {
            fetchData();
        }
    }, [isFetching]); // Dependencia de isFetching

    return (
        <div>
            <h1>Datos de Usuarios</h1>
            <button onClick={() => setIsFetching(!isFetching)}>
                {isFetching ? 'Detener Solicitud' : 'Iniciar Solicitud'}
            </button>
            {data && (
                <ul>
                    {data.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

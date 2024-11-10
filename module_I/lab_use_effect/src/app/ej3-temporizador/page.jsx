"use client";
import React, { useState, useEffect } from 'react';

export default function Temporizador() {
    const [time, setTime] = useState(0); // Estado para almacenar el tiempo en segundos

    useEffect(() => {
        // Crear el intervalo que actualiza el tiempo cada segundo
        const interval = setInterval(() => {
            setTime(time => time + 1); // Aumentar el tiempo en 1 segundo
        }, 1000);

        // Limpiar el intervalo cuando el componente se desmonte
        //return () => clearInterval(interval);
    }, []); // Solo se ejecuta una vez al montar el componente

    return (
        <div>
            <h1>Temporizador: {time} segundos</h1>
        </div>
    );
}

// src/app/formulario/page.jsx
"use client";

import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

const FormularioPage = () => {
  // Usando el hook personalizado para manejar el estado del formulario
  const { values, handleChange } = useForm({
    nombres: '',
    apellidos: '',
    email: '',
    username: '',
    password: '',
  });

  // Cargar datos desde localStorage cuando el componente se monta
  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => {
        values[key] = parsedData[key]; // Actualiza los valores con los datos guardados
      });
    }
  }, []);

  // Guardar datos en localStorage cada vez que cambian los valores
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(values));
  }, [values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', values);
  };

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombres</label>
          <input
            type="text"
            name="nombres"
            value={values.nombres}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Apellidos</label>
          <input
            type="text"
            name="apellidos"
            value={values.apellidos}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioPage;

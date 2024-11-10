// src/hooks/useForm.jsx
"use client";

import { useState } from 'react';

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  // Función para manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return { values, handleChange };
};

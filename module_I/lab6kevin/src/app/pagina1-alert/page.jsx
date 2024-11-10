"use client";
import Alert from 'react-bootstrap/Alert'; // Import Alert from react-bootstrap
import ParentComponent from "lab6kevin/components/parent.component"; // Ensure this path is correct

// Define the PaginaCard component
export default function PaginaAlert() {
  const variants = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ];

  return (
    <>
      {variants.map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
          <ParentComponent /> {/* Render ParentComponent inside each alert */}
        </Alert>
      ))}
    </>
  );
}

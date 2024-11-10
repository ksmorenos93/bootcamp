// src/app/pagina2-card/page.jsx
"use client"
import ParentComponent from "lab6kevin/components/parent.component"; // Ensure this path is correct
import { Card } from "react-bootstrap"; // Import Button

// Define the PaginaAlert component
export default function PaginaCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <ParentComponent /> {/* Render ParentComponent */}
      </Card.Body>
    </Card>
  );
}

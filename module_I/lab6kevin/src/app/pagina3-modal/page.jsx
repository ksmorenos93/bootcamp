"use client";
import { useState } from 'react'; // Import useState for managing modal visibility
import ParentComponent from "lab6kevin/components/parent.component"; // Ensure this path is correct
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button from react-bootstrap

// Define the PaginaCard component
export default function PaginaCard() {
    const [show, setShow] = useState(false); // State to control modal visibility

    const handleClose = () => setShow(false); // Function to close the modal
    const handleShow = () => setShow(true); // Function to open the modal

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch Modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal Conteo Context API</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5></h5>
                    <p>
                        Este es el contenido del modal que hicimos usando Context API
                    </p>
                    <ParentComponent /> {/* Render ParentComponent inside the modal */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}> Close </Button>
                    <Button variant="primary" onClick={handleClose}> Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

"use client"

import { Col, Container, Row, FloatingLabel, Form, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useInputHook } from "lab9kevin/hooks/use-input-hook"


export default function CreateProductPage() {

    const title = <h3>Hola Learn React</h3>;
    const paragraph = <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias, aliquam aut commodi dolor eaque excepturi fugit inventore iure iusto maxime nulla numquam odio quas qui quibusdam quisquam quos, similique.</p>;
    const URL = "http://localhost:3000/api/v1/products/create"



    const { value: valueProductName, bind: bindProductName, reset: resetFirstname } = useInputHook();
    const { value: valuePrice, bind: bindPrice, reset: resetLastname } = useInputHook();
    const { value: product, setValue: setProduct } = useInputHook();

    const handleSubmit = event => {
        event.preventDefault();
        console.log(valueProductName, valuePrice);
        setProduct({ valueProductName, valuePrice });

    };

    useEffect(() => {
        fetch(URL, {
            method: 'POST',
            body: JSON.stringify(product),
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }, [product])

    return (
        <Container>
            <Row>
                <Col>
                    <h2>{title}</h2>
                    <p>{paragraph}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Nombre"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="name@example.com" {...bindProductName} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPrice" label="Precio">
                            <Form.Control type="text" placeholder="Precio" {...bindPrice} />
                        </FloatingLabel>
                    </>
                </Col>
            </Row>
            <Row>
                <Button variant="primary" onClick={handleSubmit}>Guardar</Button>{' '}
            </Row>
        </Container>
    )
}
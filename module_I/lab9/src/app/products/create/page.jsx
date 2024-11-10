"use client"

import {Col, Container, Row, FloatingLabel, Form, Button} from "react-bootstrap";
import {useInputHook} from "lab9/hooks/use-input-hook";
import {useCreateProductMutation} from "lab9/store/services/product.api";

export default function CreateProductPage() {
  
  const title = <h1>Hola Learn React</h1>;
  const paragraph = <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias, aliquam aut commodi dolor eaque excepturi fugit inventore iure iusto maxime nulla numquam odio quas qui quibusdam quisquam quos, similique.</p>;
  
  const [createProduct, {isUpdating}] = useCreateProductMutation();
  
  const {value: valueProductName, bind: bindProductName, reset: resetFirstname} = useInputHook();
  const {value: valuePrice, bind: bindPrice, reset: resetLastname} = useInputHook();
  
  const handleSubmit = event => {
    event.preventDefault();
    console.log(valueProductName, valuePrice);
    
    createProduct({valueProductName, valuePrice})
      .unwrap()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };
  
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
              <Form.Control type="text" placeholder="Precio" {...bindPrice}/>
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
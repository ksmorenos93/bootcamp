"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {Container, Row, Col, Form, Button} from "react-bootstrap";
import {getDivision, getModule} from "lab8/store/features/operations.slice";

export default function Home() {
  
  const dispatch = useDispatch();
  const operations = useSelector(state => state.operations);
  
  const [divisor, setDivider] = useState(0);
  const [dividend, setDividend] = useState(0);
  
  const handleDivision = () => dispatch(getDivision({divisor, dividend}));
  const handleModule = () => dispatch(getModule({divisor, dividend}));
  
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupDivisor">
              <Form.Label>Divisor</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                onChange={event => setDivider(event.target.value)}
                value={divisor}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupDividen">
              <Form.Label>Dividendo</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                onChange={event => setDividend(event.target.value)}
                value={dividend}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" onClick={handleDivision}>Calcular division</Button>{' '}
          </Col>
        <Col>
          <Button variant="secondary" onClick={handleModule}>Calcular modulo</Button>{' '}
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>El valor de la division es: {operations.division}</h2>
        </Col>
        <Col>
          <h2>El valor del modulo es: {operations.module}</h2>
        </Col>
      </Row>
    </Container>
  );
}

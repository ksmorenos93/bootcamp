"use client";

import { useState} from "react";
import {Col, Container, Row, Form} from "react-bootstrap";
import MoneyCoConverter from "lab5/components/money.co.converter";
import MoneyMxConverter from "lab5/components/money.mx.converter";

export default function Home() {
  let [value, setValue] = useState();
  
  return (
    <Container fluid>
      <Row>
        <Col md={{span: 6, offset: 3}}>
          <Form.Label htmlFor="exampleInput">Valor</Form.Label>
          <Form.Control
            type="number"
            id="exampleInput"
            onChange={(event) => {setValue(event.target.value)}}
            value={value}
            />
        </Col>
        <Col md={{span: 6, offset: 3}}>
          <MoneyCoConverter value={value} />
        </Col>
        <Col md={{span: 6, offset: 3}}>
          <MoneyMxConverter value={value} />
        </Col>
      </Row>
    </Container>
  );
}

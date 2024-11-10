"use client"

import { Col, Container, Row } from "react-bootstrap";
import Header from  "lab4kevin/components/shared/header/page"

export default function Home() {
  return (
    <Container>
      <Row>
        <Header/>

      </Row>
      <Row>
        <Col> 
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

          </p>
        </Col>
        <Col>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Col>
      </Row>
    </Container>
    
  );
}

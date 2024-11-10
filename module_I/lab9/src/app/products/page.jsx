"use client";

import {Container, Row, Col, ListGroup } from "react-bootstrap";

import {useGetProductsQuery} from "lab9/store/services/product.api";

export default function Product() {
  
  const { data, error, isLoading } = useGetProductsQuery();
 
  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            {data && data.length > 0 && data.map((item, index) => (
              <ListGroup.Item key={item.id}>{item.title}, precio {item.body}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}
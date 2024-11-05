"use client"

import {useState, useEffect} from "react"
import {Container, Row, Col, ListGroup} from "react-bootstrap"


export default function Product(){
    const URL= 'http://localhost:3000/api/v1/products'
    const [products, setProducts] = useState ([])

    useEffect ( ()=> {
        fetch (URL)
            .then(response => response.json())
            .then (data => setProducts (data))
            .catch (error => console.log (error));
    }, []);

    return  (
        <Container>
            <Row>
                <Col>
                <ListGroup>
                    {products && products.length > 0 && products.map((item) => (
                        <ListGroup.Item key={item.id}> {item.name}, precio {item.price}</ListGroup.Item>
                    )  )}
                </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}
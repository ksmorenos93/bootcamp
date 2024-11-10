"use client"

import {Container, Row, Col, ListGroup} from "react-bootstrap";
import Header from "lab4kevin/components/shared/header/page";
import { useEffect, useState } from "react";
import withAuth from "lab4kevin/hoc/with-auth";

function ProductPage() {

    let [product, setProduct]= useState([]);

    useEffect(()=>{

        fetch ("http://localhost:3000/api")
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch(err => console.log(err));

    }, []);

    
    return (
        <Container>
            <Row>
                <Header/>
            </Row>
            <Row>
                <ListGroup>
                    {product.map( product => (
                        <ListGroup.Item key={product.id}> {product.name}</ListGroup.Item>
                    ))}
                </ListGroup>
            </Row>
        </Container>
       
    )
}

export default withAuth(ProductPage);
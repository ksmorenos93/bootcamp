import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "lab11/styles/Home.module.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Link from 'next/link';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/v1/products");
  const products = await response.json();
  
  return {
    props: {
      products: products,
    }
  }
}



export default function Home({ products }) {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Server Side Render</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="secondary">Secondary</Button>{' '}
        </Col>
        <Col>
          <Button variant="dark">Dark</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {products?.map(product =>(
                <ListGroup.Item key={product.id}><Link href={`/products/${product.id}`}>{product.name}</Link></ListGroup.Item>
              )
              )}
          </ListGroup>
          
        </Col>
      </Row>
    </Container>
  );
}

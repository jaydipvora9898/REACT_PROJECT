import React from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import './Customer.css';
import Img1 from '../../assets/Img/product-01-2.webp';
import Img2 from '../../assets/Img/product-12-1.webp';
import Img3 from '../../assets/Img/product-04-3.webp';
import Img4 from '../../assets/Img/product-06-1.webp';
import Img5 from '../../assets/Img/product-03-3.webp';
import Img6 from '../../assets/Img/product-05-1.webp';
import Img7 from '../../assets/Img/banner-21.webp';
const products = [
  {
    id: 1,
    name: 'Shield Conditioner',
    price: '$27.00',
    image: Img1,
    tag: 'New'
  },
  {
    id: 2,
    name: 'Natural Coconut Cleansing Oil',
    price: '$21.00',
    image: Img2
  },
  {
    id: 3,
    name: 'Shield Shampoo',
    price: '$39.00',
    oldPrice: '$60.00',
    image: Img3,
    tag: 'Sale'
  },
  {
    id: 4,
    name: 'Enriched Duo',
    price: '$27.00',
    image: Img4
  },
  {
    id: 5,
    name: 'Enriched Hand & Body Wash',
    price: '$23.00',
    image: Img5,  
    tag: 'New'
  },
  {
    id: 6,
    name: 'Enriched Hand Wash',
    price: '$25.00',
    oldPrice: '$85.00',
    image: Img6,
    tag: 'Sale'
  }
];
const Customer = () => {
  return (
    <Container fluid className="customer-section">
      <h1 className="text-center">Customer favorite beauty essentials</h1>
      <p className="text-center fs-5 mt-4 mb-5">Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
      <Row className="align-items-center">
        <Col md={5} className="text-center image-text-section">
          <img
            src={Img7}
            alt="Model Face"
            className="promo-image"
          />
          <div className="promo-text">
            <h2>Empower Yourself</h2>
            <p>Get the skin you want to feel</p>
            <Button variant="light" className="btn">Explore More</Button>
          </div>
        </Col>
        {/* Right Side: Products Grid */}
        <Col md={7}>
          <Row>
            {products.map((product) => (
              <Col md={4} sm={6} xs={12} key={product.id} className="mb-4">
                <Card className="product-card text-center">
                  {product.tag && (
                    <Badge
                      bg={product.tag === 'Sale' ? 'success' : 'warning'}
                      className="product-badge"
                    >
                      {product.tag}
                    </Badge>
                  )}
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Text className="product-price">
                      {product.oldPrice && (
                        <span className="text-muted text-decoration-line-through me-1">
                          {product.oldPrice}
                        </span>
                      )}
                      {product.price}
                    </Card.Text>
                    <Card.Title>{product.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Customer;
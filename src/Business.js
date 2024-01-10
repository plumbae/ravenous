import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

function Business({ business }) {
  return (
    <Card>
      <Card.Img variant="top" src={business.imageSrc} alt={business.name} />
      <Card.Body>
        <Card.Title>{business.name}</Card.Title>
        <Container className='p-0'>
          <Row>
            <Col className='adress'>{business.address}</Col>
            <Col className='category' md="auto">{business.category}</Col>
          </Row>
          <Row>
            <Col className='city'>{business.city}</Col>
            <Col className='rating' md="auto">{business.rating} stars</Col>
          </Row>
          <Row>
            <Col className='zipcode'>{business.zipCode}</Col>
            <Col className='reviewcount' md="auto">{business.reviewCount} reviews</Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default Business;
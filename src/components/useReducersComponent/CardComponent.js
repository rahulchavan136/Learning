import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const CardComponent = ({ card, onDelete }) => (
  <Row>
    <Col className='g-4' xs={4} md={4}>
      <Card>
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.category}</Card.Text>
          <Button variant='primary' onClick={() => onDelete(card.id)}>Delete</Button>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default CardComponent;

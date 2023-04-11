import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Product(props) {
  const { id, title, description, image, price, quantity } = props;
  const [likes, setLikes] = useState(0);
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const [isBestProduct, setIsBestProduct] = useState(false);

  const handleLikeClick = () => {
    setLikes(likes + 1);
    if (likes >= 5) {
      setIsBestProduct(true);
    }
  };

  const handleBuyClick = () => {
    if (currentQuantity > 0) {
      setCurrentQuantity(currentQuantity - 1);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };

  const [showAlert, setShowAlert] = useState(false);

  return (
    <Card className={isBestProduct ? 'bestproduct' : ''}>
      <Link to={`/products/${id}`}>
        <Card.Img variant="top" src={image} />
      </Link>
      <Card.Body>
        <Link to={`/products/${id}`}>
          <Card.Title>{title}</Card.Title>
        </Link>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Quantity: {currentQuantity}</Card.Text>
        <Button variant="primary" onClick={handleLikeClick}>
          {likes} Likes
        </Button>
        <Button variant="primary" onClick={handleBuyClick} disabled={currentQuantity === 0}>
          Buy ({currentQuantity})
        </Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{price} $</small>
      </Card.Footer>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          You bought an item!
        </Alert>
      )}
    </Card>
  );
}

export default Product;

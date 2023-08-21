import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styling/cards.css';

const Cards = ({ product }) => {

  return (
    <Container className='main-container'>
      <Card style={{ width: '18rem' }} >
        <Card.Img style={{ height: '15rem', space: '10rem' }} src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            <b>Price:</b>  {product.price}
          </Card.Text>
          <Button variant="primary btn" >Add to Cart</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Cards;

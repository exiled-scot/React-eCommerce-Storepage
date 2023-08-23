import { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styling/ProductDetails.css';
import { useParams } from "react-router-dom";
import ProductReviews from "./ProductReviews";

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    // fetch product data from an API or other data source using the product ID
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [productId]);

    return (
        <div className="main-div">
            <div>
                {product ? (
                    <Container className='main-container'>
                        <Card className="card">
                            <Card.Body>
                                <div className="card-content">
                                    <div className="image-column">
                                        <Card.Img className="cardImg" src={product.image} alt={product.name} />
                                    </div>
                                    <div className="text-column">
                                        <Card.Title>{product.title}</Card.Title>
                                        <hr />
                                        <Card.Text>{product.description}</Card.Text>
                                        <Card.Text>
                                            <b>Price: </b> {product.price}
                                        </Card.Text>
                                        <Button variant="primary">Add to Cart</Button>
                                        </div>
                                    </div>
                                <div>
                                  <ProductReviews/>
                              </div>
                            </Card.Body>
                        </Card>
                    </Container>
                ) : (
                    <p>Loading...</p>
                )}
            </div>

        </div>
    );
};

export default ProductDetails;

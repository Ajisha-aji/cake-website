import React, { useContext } from 'react'
import { Context } from './Context'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Shop() {
    const { cart, carttoggle,products } = useContext(Context);
   
    return (
        <div>
            <Container className="my-5 bg-2">
                <h2 className="text-center p-5 cardcol"> Our Delicious Cakes </h2>
                <Row> {products.map((product) => {
                    const isinCart = cart.some((item) => item.id === product.id);
                    return (
                        <Col key={product.id} sm={12} md={6} lg={4} className='mb-5'>
                            <Card  className='card-border'>
                               <Link to={`/product/${product.id}`} className='ms-3 colormsg'>
                <Card.Img variant="top" src={product.image} className='cake-img1' />
                </Link>
                                <Card.Body>
                                    <Card.Title className='card-name'>{product.name}</Card.Title>
                                    <Card.Text>
                                        <div className='Card-Text'>
                                            <strong>₹{product.price}</strong>
                                            <div className='strong'> {product.rating} / 5</div>
                                        </div>
                                    </Card.Text>
                                    <Button className='card-btn' onClick={() => { carttoggle(product) }}>{isinCart ? "Remove from Cart" : "Add to Cart"}
                                    </Button>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}

                </Row>

            </Container>

        </div>
    )
}

export default Shop
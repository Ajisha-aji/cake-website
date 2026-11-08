import React, { useContext, useEffect, useState } from 'react'
import { Context } from './Pages/Context';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


function ProductView() {
 
  const { cart, carttoggle, products } = useContext(Context);
  const { id } = useParams();
  
 

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }
 useEffect(() => {
  window.scrollTo(0, 0);
}, [id]);
  
  const isinCart = cart.some((item) => item.id === product.id);
  return (
    <>
      <div className="container my-5 productview_card">
        <img
          src={product.image}
          alt={product.name} className='productview_img'
        />

        <div className='productview_content card'>
          <h2 className='card-name'>{product.name}</h2>
          <h4>₹{product.price}</h4>
          <p className='text-muted'>{product.description}</p>
          <p className='strong'>{product.rating} / 5</p>
      
          <Button className='card-btn' onClick={() => { carttoggle(product) }}>{isinCart ? "Remove from Cart" : "Add to Cart"}
          </Button>
        </div>

      </div>
      <div >
        <h3 className='card-name ms-5 fw-bold'>Suggested Products</h3>
        <Container className="my-5 bg-3">
          <Row> {products.map((product) => {
            const isinCart = cart.some((item) => item.id === product.id);
            return (
              <Col key={product.id} sm={12} md={6} lg={3} className='mb-5'>
                <Card className='card-border'> 
                  <Link to={`/product/${product.id}`} className='ms-3 colormsg'>
                <Card.Img variant="top" src={product.image} className='cake-img1' />
                </Link>
                  <Card.Title className='card-name'>{product.name}</Card.Title>
                    <Card.Text>
                      <div className='Card-Text'>
                        <strong>₹{product.price}</strong>
                        <div className='strong'> {product.rating} / 5</div>
                      </div>
                    </Card.Text>
                    <div className='product_view'>
                      <Button className='card-btn1' onClick={() => { carttoggle(product) }}>{isinCart ? "Remove from Cart" : "Add to Cart"}
                      </Button>

                    </div>
                  
                </Card>
              </Col>
            )
          })}

          </Row>

        </Container>
      </div>
    </>
  );
}

export default ProductView;

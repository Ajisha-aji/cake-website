import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from '../../assets/home1.jpg';
import imgee from '../../assets/home2.jpg';
import imggee from '../../assets/home.jpg';
import pic from '../../assets/browinewithcream.jpg';
import Carousel from 'react-bootstrap/Carousel';
import About from './About';
import Shop from './Shop';
import Form from  './Form';
import { useNavigate } from 'react-router-dom';
function  Home()  {
  const Navigate=useNavigate();
  return (
    <div>
      <Container fluid className='p-0 '>
      <Row className='home_title g-0'>
        <Col sm={12} lg={6}> <img src={img} alt="Cake" className="img-fluid home_title1 " /></Col>
        <Col sm={12} lg={6}>
         <Carousel data-bs-theme="dark" className='caro_top p-1'>
      <Carousel.Item>
        <img
          className="home-carousel d-block w-100 "
          src={img}
          alt="First slide"
        />
        <Carousel.Caption >
          <img src={pic} alt=""  className="img-fluid rounded-circle w-75 caro_img "  />
          <h4 className='mt-lg-5'>Welcome to Flourish Cakes</h4>
          <p className='caro_p '>Handcrafted with care, delivered with happiness..</p>
          <button className='Carousel_Caption' onClick={()=>{Navigate("/shop")}}>Shop Cakes</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="home-carousel d-block w-100 "
          src={img}
          alt="Second slide"
        />
        <Carousel.Caption >
          <img src={imgee} alt=""  className="img-fluid rounded-circle w-75 caro_img" />
          <h3 className='mt-lg-5'>Your Sweetest Celebration</h3>
          <p className='caro_p'>Beautiful cakes for unforgettable memories.</p>
          <button className='Carousel_Caption' onClick={()=>{Navigate("/shop")}}>Explore Cakes</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="home-carousel d-block w-100"
          src={img}
          alt="Third slide"
        />
        <Carousel.Caption >
          <img src={imggee} alt=""  className="img-fluid rounded-circle w-75 caro_img " />
          <h3 className='mt-lg-5'>Craving Something Delicious?</h3>
          <p className='caro_p'>
            Indulge in rich flavors crafted to melt your heart.
          </p>
          <button className='Carousel_Caption' onClick={()=>{Navigate("/shop")}}>Find Your Cake</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></Col>
      </Row>
    </Container>
      <About/>
      <Shop/>
      <Form/>
    </div>
  )
}

export default Home
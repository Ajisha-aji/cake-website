import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import aboutimg from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
function About() {
    return (
        <div>
             <Container className="about_section mt-5 py-5">
      <Row className="align-items-center g-4">
        <Col md={6}>
          <img
            src={aboutimg}
            alt="Freshly baked cake"
            className="about_img"
          />
        </Col>

        <Col md={6}>
          <p className="about_subtitle">OUR STORY</p>
          <h2 className='about_h2'>Baking Happiness, One Cake at a Time</h2>
          <p className='about_p'>
            We bake every cake with love, care and
            the finest ingredients to make your
            celebrations unforgettable.
          </p>
          <Link to="/aboutus" className="about_btn">
  Discover Our Story
</Link>
         
        </Col>
      </Row>
    </Container>
   
    <Container className="mission_section py-5 text-center">
  <p className='mission_section1'>OUR MISSION</p>
  <h2>Making Every Moment Sweeter</h2>
  <p>
    Our mission is to create delicious cakes with love and care,
    bringing happiness to every celebration and making every
    moment unforgettable.
  </p>
</Container>
            </div>
            )
}
export default About
import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

function Aboutus() {
  return (
    <div> 
 <Container className="story_section py-5">
      <Row className="align-items-center">
        <Col lg={12} className="text-center">
          <p className="story_subtitle">OUR STORY</p>

          <h2 className="story_title">
            Baking Happiness, One Cake at a Time
          </h2>

          <p className="story_text">
            At Flourish Cake Shop, we create delicious cakes
            with love and care. From everyday treats to special
            celebrations, we make every moment sweeter with
            our freshly baked creations.
          </p>
        </Col>
      </Row>
    </Container>

       
        <Container className='about_section1 '>
      <Row>
        <Col className='about_subtitle ' lg={12}>What We Offer</Col>
      <Col className='about_h3 mt-3'lg={12}> <h2>Our Services</h2> </Col>
      </Row>
     <Row className='circle'>
      <Col sm={6} md={6} lg={3}>
          <div className='circle1'>
            <h5>Custom Cakes</h5>
            <p>Beautiful custom cakes for every special moment, made with love to sweeten your celebrations.</p>
          </div>
      </Col>
       <Col sm={6} md={6} lg={3}><div className='circle1'>
            <h5> Cupcakes & Desserts</h5>
            <p>Enjoy delightful cupcakes, brownies, and sweet treats perfect for sharing.</p>
          </div></Col>
       <Col sm={6} md={6} lg={3}><div className='circle1'>
            <h5>Online Cake Ordering</h5>
            <p> Order your favorite cakes with ease and make every celebration sweeter.</p>
          </div></Col>
           <Col sm={6} md={6} lg={3}><div className='circle1'>
            <h5>Eggless Cakes</h5>
            <p> Delicious eggless cakes made with care, so everyone can enjoy a sweet celebration.

</p>
          </div></Col>
     </Row>
    </Container>

     <Container className="why_section py-5">
      <Row className="text-center">
        <Col lg={12}>
          <p className="why_subtitle">WHY CHOOSE US</p>
          <h2 className="why_title">
            Why Choose Flourish?
          </h2>
          <p className="why_text">
            Every cake is made with love to make your
            special moments sweeter.
          </p>
        </Col>
      </Row>

      <Row className="g-4 mt-3">
        <Col sm={6} lg={3}>
          <div className="why_card">
            <div className="why_icon">🎂</div>
            <h5>Freshly Baked</h5>
            <p>
              Freshly baked cakes made to bring
              happiness to every celebration.
            </p>
          </div>
        </Col>

        <Col sm={6} lg={3}>
          <div className="why_card">
            <div className="why_icon">🌿</div>
            <h5>Quality Ingredients</h5>
            <p>
              Carefully selected ingredients for
              delicious and delightful treats.
            </p>
          </div>
        </Col>

        <Col sm={6} lg={3}>
          <div className="why_card">
            <div className="why_icon">🎨</div>
            <h5>Beautiful Designs</h5>
            <p>
              Creative cake designs made special
              for your memorable occasions.
            </p>
          </div>
        </Col>

        <Col sm={6} lg={3}>
          <div className="why_card">
            <div className="why_icon">❤️</div>
            <h5>Made with Love</h5>
            <p>
              Every cake is crafted with care
              and a little extra sweetness.
            </p>
          </div>
        </Col>
      </Row>
    </Container>

</div>
  )
}

export default Aboutus
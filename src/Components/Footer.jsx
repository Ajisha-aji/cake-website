
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="py-4">

                    <Col md={4} className="mb-3">
                        <h3>Flourish</h3>
                        <p>
                            Freshly baked delights, made with love and a little sprinkle of magic.
                        </p>
                    </Col>

                    <Col md={4} className="mb-3">
                        <h5>Quick Links</h5>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/form">Contact Us</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                        </ul>
                    </Col>

                    <Col md={4} className="mb-3">
                        <h5>Contact Us</h5>
                        <p>
                            <img className='bi-envelope' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/new-post.png" alt="new-post" />
                            <span> support@aurabeauty.com</span>
                        </p>
                        <p>
                            <img className='bi-envelope' width="30" height="30" src="https://img.icons8.com/material-sharp/24/phone.png" alt="phone" />
                            <span> +91 5678923423</span>
                        </p>
                        <img className='bi-envelope' width="30" height="30" src="https://img.icons8.com/material-sharp/24/address.png" alt="address" />
                        <span> 12,street park road, TamilNadu-987004</span>

                    </Col>

                </Row>

                <hr />

                <p className="text-center copyright">
                    © 2026 Flourish cake. All rights reserved.
                </p>
            </Container>
        </footer>
    );
}

export default Footer;

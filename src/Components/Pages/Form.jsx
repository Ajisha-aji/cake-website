import React, { useState } from 'react'

import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import {  useNavigate } from 'react-router-dom';
import Footer from '../Footer';

function Form() {
    const [input, setinput] = useState({});
    const Navigate=useNavigate();
    function handlesubmit(e) {
        e.preventDefault()
     Navigate('/');
        
    }
    function handlechange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setinput((prevstate) => ({ ...prevstate, [name]: value }))
         
    }
    
    return (
        <div id='Contactus'>
            <Container className='mt-5'>
                <Row >
                    <Col className='formtitle mt-2'>
                        <h2 className='mt-5 colormsg'>Contact Information</h2>
                        <Row className='form1 mt-4 '>
                            <Col sm={1} className='form2'><img className='bi-envelope' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/new-post.png" alt="new-post"/></Col>
                            <Col sm={11}><h5>email address</h5>
                                <p className='text-muted'>support@aurabeauty.com</p></Col>
                        </Row>
                        <Row className='form1'>
                            <Col sm={1} className='form2'><img className='bi-envelope' width="30" height="30" src="https://img.icons8.com/material-sharp/24/phone.png" alt="phone"/></Col>
                            <Col sm={11}><h5>Phone Number</h5>
                                <p className='text-muted'>+91 5678923423</p></Col>
                        </Row>
                        <Row className='form1'>
                            <Col sm={1} className='form2'><img  className='bi-envelope'width="30" height="30" src="https://img.icons8.com/material-sharp/24/address.png" alt="address"/></Col>
                            <Col sm={11}> <h5>Store Address</h5>
                                <p className='text-muted'>12,street park road, <br />TamilNadu-987004</p></Col>
                        </Row>
                    </Col>
                    <Col>

                        <form action="" onSubmit={handlesubmit}>
                            <h2 className='colormsg'>Send Us a Message</h2>
                            <label htmlFor="">Name</label>
                            <input type="text"  value={input.name || ''} name='name' onChange={handlechange} placeholder='Name' />
                            <br />
                            <label htmlFor="">email</label>
                            <input type="email"   value={input.email || ''} name='email' onChange={handlechange} placeholder='email'/>
                            <br />
                            <label htmlFor="">subject</label>
                            <input type="text" value={input.subject || ''} name='subject' onChange={handlechange} placeholder='Subject'/>
                            <br />
                            <label htmlFor="">Message</label>
                            <input type="text" value={input.Message || ''} className='mesg' name='Message' onChange={handlechange} placeholder='Message'/>
                            <br />
                            <input type="submit" value="Submit" className='submit' />
                        </form></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Form

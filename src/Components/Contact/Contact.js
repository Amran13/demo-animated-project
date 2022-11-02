import React from 'react';
import './Contact.css';
import { Button, Form } from 'react-bootstrap';


const Contact = () => {
    return (
        <div className='contact-container container w-50 my-5 py-5'>
            <h3 className='text-center text-danger fw-bold'>Contact Us</h3>
            <Form className="my-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-light fw-bold'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="text-light fw-bold">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
    <div>
        <p className='text-muted text-center'>Copywrite&copy;ItWillCostYou.com</p>
    </div>
        </div>
    );
};

export default Contact;
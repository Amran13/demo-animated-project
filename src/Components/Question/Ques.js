import React from 'react';
import { Accordion, Button } from 'react-bootstrap';
import './Ques.css';
import img from './../../Resources/flat-people-group-asking-questions_23-2148927481.webp'

const Ques = () => {
    return (
        <div className='container question-container'>
            <div className='mx-5'>
            <h2 className='text-danger'>This is me</h2>
                <p className="text-light my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nulla quasi dicta, qui quis aliquam nobis odit tempore alias deserunt quae aliquid quibusdam reiciendis aperiam facere distinctio. Fugiat fuga, magnam harum omnis dolore fugit est suscipit aperiam, tenetur temporibus minus!</p>
                <Button className='my-3' variant="danger">RESUME</Button>
            </div>  
            <div className='mx-5'>
                <img className='ques-img' src={img} alt="" />
            </div>
        </div>
    );
};

export default Ques;
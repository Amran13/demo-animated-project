import React from 'react';
import './About.css';
import avatar from './../../Resources/businessman-character-avatar-isolated_24877-60111.webp'
import { Button } from 'react-bootstrap';

const About = () => {
    return (
        <div className='about-container'>
            <div className='mx-5'>
            <img src={avatar} alt="" />
            </div>
            <div className='mx-5'>
                <h2 className='text-danger'>This is me</h2>
                <p className="text-light my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nulla quasi dicta, qui quis aliquam nobis odit tempore alias deserunt quae aliquid quibusdam reiciendis aperiam facere distinctio. Fugiat fuga, magnam harum omnis dolore fugit est suscipit aperiam, tenetur temporibus minus!</p>
                <Button className='my-3' variant="danger">RESUME</Button>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.css';
const Home = () => {
    return (
        <div className='home-container mx-5'>
            <h1 className='text-danger'>Hello World</h1>
            <p className='text-light my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, natus asperiores? Omnis harum nesciunt ducimus suscipit perferendis numquam nihil quaerat, similique accusantium, distinctio, veniam odit modi. Sed ad sint, corrupti nemo ducimus, culpa blanditiis repellendus reiciendis praesentium veritatis, quia officiis minus? Rem neque deleniti ullam illum veritatis ipsa quia dolores facere veniam quis dolorem possimus culpa vero pariatur ipsum voluptas delectus voluptatibus, voluptatem est sapiente. Modi, minus explicabo. Velit, reprehenderit maiores. Voluptates, perferendis! Expedita omnis, eligendi modi minus iste illo incidunt nemo unde quo tempora doloribus sint rerum voluptatibus! Doloribus provident ad aliquam, quos cum deserunt molestias earum magnam cumque!</p>
            <Button className="my-3" variant="danger">WHATS UP</Button>
        </div>
    );
};

export default Home;
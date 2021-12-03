import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import TypewriterSlug from '../Typewriter/TypewriterSlug';

const About = () => {
    return (
        <div>
            
            <Container>
            <h2 className="mb-0 pb-0 text-info text-uppercase fw-bolder fs-2 nav-heading pt-4" href="#"><span className="fs-1 text-black-50">A</span>bout <span className="fs-1 text-black-50">M</span>e</h2>
                <Row xs={1} md={2}>
                    
                    <Col className=" text-start d-flex align-items-center font-monospace bg-custom border border-5 rounded rounded-3 my-5 my-xm-2">
                        <div >
                            <p>I'm Abdur Rahman. I'm a comfortable developer of MERN stack and forever learner of Javascript. I want to be a extreme MERN developer. </p>
                            <p>I am a JavaScript developer. I have worked with HTML, CSS, JavaScript, react Js, express Js, node Js, MongoDB with some necessary tools like git, GitHub, Firebase, Heroku, Netlify etc. I mostly love to work with JavaScript.</p>
                            <p>I would like to go from beginner to advance in this stack periodically. I'm really looking forward to working with Web site security in the future.</p>
                        </div>
                    </Col>
                    <Col><Card.Img variant="top" className=" px-xs-2 py-xm-1" src="https://i.ibb.co/VJDMZpD/webdev1.png" /></Col>
                </Row>

            </Container>
        </div>
    );
};

export default About;
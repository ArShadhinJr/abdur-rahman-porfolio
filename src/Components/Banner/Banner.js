import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import "./Banner.css";

const Banner = () => {
    return (
        <>
            <div className=" bg-banner ">
                <Container >
                    <Row xs={1}  md={2}>
                        <Col><Card.Img variant="top" className="p-img p-xs-3 rounded rounded-circle" src="https://i.ibb.co/SnCd3ML/Whats-App-Image-2021-12-01-at-2-40-59-PM.jpg" /></Col>
                        <Col className="d-flex align-items-center">
                            <div >
                                <h2>Hey You!</h2>
                                <h2>I'm ABDUR RAHMAN</h2>
                                <h2>Junior MERN Stack Developer</h2>
                                <p>knack of building applications with front and back end operations.
                                </p>
                                <Button className="btn btn-success me-2">Hire Me</Button>
                                <Button className="btn btn-info text-black">Download Resume</Button>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    );
};

export default Banner;
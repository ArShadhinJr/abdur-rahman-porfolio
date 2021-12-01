import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import TypewriterSlug from '../Typewriter/TypewriterSlug';
import "./Banner.css";


const Banner = () => {
    return (
        <>
            <div className=" bg-banner ">
                <Container >
                    <Row xs={1} md={2}>
                        <Col><Card.Img variant="top" className="p-img p-xs-3 rounded rounded-circle" src="https://i.ibb.co/SnCd3ML/Whats-App-Image-2021-12-01-at-2-40-59-PM.jpg" target="_blank" /></Col>
                        <Col className="d-flex align-items-center">
                            <div >
                                <h2><a target="_blank" href="https://www.facebook.com/abdrahmanbinmd" className="me-3 text-black"><i class="fab fa-facebook-square" ></i></a>
                                    <a target="_blank" href="https://www.linkedin.com/in/abdrahmanbinmd/" className="me-3 text-black"><i class="fab fa-linkedin"></i></a>
                                    <a target="_blank" href="https://github.com/ArShadhinJr" className="me-3 text-black"><i class="fab fa-github-square"></i></a>
                                    <a target="_blank" href="https://stackoverflow.com/users/16592384/abdur-rahman-bin-muhammad" className=" text-black"><i class="fab fa-stack-overflow"></i></a>
                                </h2>
                                <h2>Hey You!</h2>
                                <h2>I'm ABDUR RAHMAN</h2>
                                <TypewriterSlug></TypewriterSlug>
                                <p>I'm simple, I love simple, I want to work with you, Becouse you love simple.
                                </p>
                                <Button className="btn btn-dark me-2">Hire Me</Button>
                                <Button href="https://drive.google.com/uc?export=download&id=1MvOa40LRLVSRCamXWN7tLJuLxmCzD1u1" className="btn btn-info text-black">Download Resume</Button>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    );
};

export default Banner;
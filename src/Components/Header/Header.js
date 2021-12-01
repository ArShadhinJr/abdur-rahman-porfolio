import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Header.css";

const Header = () => {
    return (
        <><Navbar bg="info" expand="lg" className="sticky-top">
            <Container className="d-flex " fluid="md">
                <div flluid>
                    <Navbar.Brand className="mb-0 pb-0 text-white text-uppercase fw-bolder fs-2 nav-heading" href="#"><span className="fs-1 text-black-50">a</span>Bdur <span className="fs-1 text-black-50">r</span>ahman</Navbar.Brand>
                </div>
                <div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '300px' }}
                            navbarScroll
                        >
                            <Nav.Link className="btn" href="#action1">ABOUT ME</Nav.Link>
                            <Nav.Link className="btn" href="#action2">PROJECTS</Nav.Link>
                            <Nav.Link className="btn" href="#action3">BLOGS</Nav.Link>
                            <Nav.Link className="btn" href="#action4">CONTACT</Nav.Link>
                            <Nav.Link className="btn btn-light" href="https://drive.google.com/file/d/1MvOa40LRLVSRCamXWN7tLJuLxmCzD1u1/view">RESUME</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar></>
    );
};

export default Header;
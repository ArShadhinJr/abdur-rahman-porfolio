import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="info" expand="lg">
            <Container className="d-flex justify-content-between" fluid>
                <Container flluid>
                    <Navbar.Brand className="mb-0 pb-0 text-white text-uppercase fw-bolder" href="#">ABdur Rahman</Navbar.Brand>
                </Container>
                <Container fluid className="d-flex justify-content-end">
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 d-flex justify-content-end"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">ABOUT ME</Nav.Link>
                            <Nav.Link href="#action2">PROJECTS</Nav.Link>
                            <Nav.Link href="#action2">HAIR ME</Nav.Link>
                            <Nav.Link href="#action2">CONTACT</Nav.Link>
                            <Nav.Link className="btn btn-light" href="https://drive.google.com/file/d/1MvOa40LRLVSRCamXWN7tLJuLxmCzD1u1/view">RESUME</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Container>
        </Navbar>
    );
};

export default Header;
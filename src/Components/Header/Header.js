import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="info" expand="lg">
            <Container className="" fluid="md">
                <Row className="mb-0 pb-0">
                    <Col md={4} className="mb-0 pb-0">
                        <Navbar.Brand className="mb-0 pb-0 text-white text-uppercase fw-bolder" href="#"><h2 className="mb-0 pb-0">abdur rahman</h2></Navbar.Brand>
                    </Col>
                    <Col md={8} className="mb-0 pb-0">
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">ABOUT ME</Nav.Link>
                                <Nav.Link href="#action2">PROJECTS</Nav.Link>
                                <Nav.Link href="#action2">HAIR ME</Nav.Link>
                                <Nav.Link href="#action2">CONTACT</Nav.Link>
                                <Nav.Link className="btn btn-light" href="#action2">RESUME</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default Header;
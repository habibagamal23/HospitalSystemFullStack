import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/navbars.css';  // Link to the updated CSS file

const Navbars = () => {
    return (
        <Navbar bg="light" expand="lg" className="navbar-custom">
            <Container>
                {/* Hospital Logo */}
                <Navbar.Brand as={Link} to="/" className="brand">
                    <span style={{ fontWeight: 'bold', color: '#4200FF' }}>Hospital</span> logo
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav-center">
                        {/* Home Link */}
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>

                        {/* Services Dropdown */}
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/services/outpatient">
                                Outpatient Services
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/services/inpatient">
                                Inpatient Services
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/services/emergency">
                                Emergency Services
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Other Navigation Links */}
                        <Nav.Link as={Link} to="/doctors">
                            Doctors
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about">
                            About us
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact">
                            Contact us
                        </Nav.Link>
                    </Nav>

                    {/* Sign In and Sign Up Buttons */}
                    <Nav>
                        <Button variant="primary" as={Link} to="/login" className="sign-button btn-primary" style={{ marginRight: '10px' }}>
                            Sign in
                        </Button>
                        <Button variant="outline-primary" as={Link} to="/register" className="sign-button btn-outline-primary">
                            Sign up
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navbars;

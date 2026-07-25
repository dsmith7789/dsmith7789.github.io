import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Layout() {
    return (
        <div className="site-shell">
            <Navbar expand="md" variant="light" className="site-nav">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="brand-mark">
                        Dante Smith
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="primary-navigation" />
                    <Navbar.Collapse id="primary-navigation">
                        <Nav className="ms-auto align-items-md-center">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                            <Nav.Link href="https://dsmith7789.github.io/blog/">Blog</Nav.Link>
                            <div className="vr mx-md-3"></div>
                            <Nav className="social-nav">
                                <Nav.Link href="https://github.com/dsmith7789" target="_blank" aria-label="GitHub profile">
                                    <FontAwesomeIcon icon={faGithub} />
                                </Nav.Link>
                                <Nav.Link href="https://linkedin.com/in/dsmith7789" target="_blank" aria-label="LinkedIn profile">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </Nav.Link>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main className="body-spacer">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;

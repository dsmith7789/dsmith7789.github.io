import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

// Import Font Awesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Layout(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Dante Smith
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav className="ms-auto d-flex align-items-center">
                            <div className="vr mx-3"></div> {/* Divider with some margin */}
                            <Nav.Link href="https://github.com/dsmith7789" target="_blank">
                                <FontAwesomeIcon icon={faGithub} />
                            </Nav.Link>
                            <Nav.Link href="https://linkedin.com/in/dsmith7789" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </Nav.Link>
                        </Nav>
                    </Nav>
                </Container>
            </Navbar>
            <div className="body-spacer">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
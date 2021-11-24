import React from "react";
import { Container, Navbar, Form, Button, Nav } from "react-bootstrap";
const Navi = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/truper-project/public/">
                    <img
                        src="images/unnamed.png"
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                        alt="Truper logo"
                    />{" "}
                    TRUPER
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/truper-project/public/">About</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Form className="d-flex">
                        <Button
                            href="/truper-project/public/LoginForm"
                            variant="outline-light"
                        >
                            Iniciar sesión
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Navi;

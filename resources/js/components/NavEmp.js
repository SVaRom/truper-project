import React from "react";
import { useNavigate } from "react-router";
import { Container, Navbar, Form, Button, Nav } from "react-bootstrap";
const NavEmp = () => {
    let history = useNavigate();
    const vamonos = (e) => {
        history("/truper-project/public/Empleado");
    };
    const vamonosx2 = (e) => {
        history("/truper-project/public/ShowTiene");
    };
    const vamonosx3 = (e) => {
        history("/truper-project/public/ShowSucursales");
    };
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
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
                    <Nav.Link onClick={vamonos}>Solicitar</Nav.Link>
                    <Nav.Link onClick={vamonosx2}>Solicitudes</Nav.Link>
                    <Nav.Link onClick={vamonosx3}>Sucursales</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Form className="d-flex">
                        <Button
                            href="/truper-project/public/LoginForm"
                            variant="outline-light"
                        >
                            Cerrar sesión
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default NavEmp;

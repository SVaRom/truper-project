import React from "react";
import { useNavigate } from "react-router";
import { Container, Navbar, Form, Button, Nav } from "react-bootstrap";
const NavAdmin = () => {
    let history = useNavigate();
    const vamonos = (e) => {
        history("/truper-project/public/AddProducto");
    };
    const vamonosx2 = (e) => {
        history("/truper-project/public/AddEmpleado");
    };
    const vamonosx3 = (e) => {
        history("/truper-project/public/AddSucursal");
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
                    <Nav.Link onClick={vamonos}>Productos</Nav.Link>
                    <Nav.Link onClick={vamonosx2}>Empleados</Nav.Link>
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
export default NavAdmin;

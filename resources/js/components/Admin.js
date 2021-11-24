import React from "react";
import NavAdmin from "./NavAdmin";
import { useNavigate } from "react-router";
import { Container, Nav } from "react-bootstrap";
const Admin = () => {
    let history = useNavigate();
    const vamonos = (e) => {
        history("/truper-project/public/AddProducto");
    };
    const vamonosx2 = (e) => {
        history("/truper-project/public/UpdateProducto");
    };
    const vamonosx3 = (e) => {
        history("/truper-project/public/DeleteProducto");
    };
    const vamonosx4 = (e) => {
        history("/truper-project/public/ShowProductos");
    };
    return (
        <>
            <NavAdmin />
            <Container>
                <center>
                    <br />
                    <h2>Productos</h2>
                </center>
                <hr />
                <Nav justify variant="tabs">
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" onClick={vamonos}>
                            Agregar
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" onClick={vamonosx2}>
                            Modificar
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3" onClick={vamonosx3}>
                            Eliminar
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4" onClick={vamonosx4}>
                            Mostrar
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </>
    );
};
export default Admin;

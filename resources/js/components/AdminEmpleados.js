import React from "react";
import NavAdmin from "./NavAdmin";
import { Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";
const AdminEmpleados = () => {
    let history = useNavigate();
    const vamonos = (e) => {
        history("/truper-project/public/AddEmpleado");
    };
    const vamonosx2 = (e) => {
        history("/truper-project/public/DeleteEmpleado");
    };
    const vamonosx3 = (e) => {
        history("/truper-project/public/ShowEmpleados");
    };

    return (
        <>
            <NavAdmin />
            <Container>
                <center>
                    <br />
                    <h2>Empleados</h2>
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
                            Eliminar
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3" onClick={vamonosx3}>
                            Mostrar
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </>
    );
};
export default AdminEmpleados;

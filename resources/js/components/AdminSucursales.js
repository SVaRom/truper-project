import React from "react";
import NavAdmin from "./NavAdmin";
import { Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";
const AdminSucursales = () => {
    let history = useNavigate();
    const vamonos = (e) => {
        history("/truper-project/public/AddSucursal");
    };
    const vamonosx2 = (e) => {
        history("/truper-project/public/UpdateSucursal");
    };
    const vamonosx3 = (e) => {
        history("/truper-project/public/DeleteSucursal");
    };
    const vamonosx4 = (e) => {
        history("/truper-project/public/ShowSucursal");
    };
    return (
        <>
            <NavAdmin />
            <Container>
                <center>
                    <br />
                    <h2>Sucursales</h2>
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
export default AdminSucursales;

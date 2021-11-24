import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import AdminEmpleados from "../AdminEmpleados";
const ShowEmpleados = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
            axios
                .post("http://localhost/truper-project/public/api/showEmps")
                .then((response) => {
                    setData(response.data);
                });
            setLoading(false);
            console.log(data);
        })();
    }, []);
    return (
        <>
            <AdminEmpleados />
            <Container>
                <br />
                <h1>Tabla Empleados</h1>
                <hr />
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Dirección</th>
                            <th>Correo</th>
                            <th>ID Sucursal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((dataItem) => (
                            <tr key={dataItem.id}>
                                <td>{dataItem.name}</td>
                                <td>{dataItem.lastname}</td>
                                <td>{dataItem.address}</td>
                                <td>{dataItem.email}</td>
                                <td>{dataItem.sucursales_id}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
};
export default ShowEmpleados;

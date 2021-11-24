import React, { useState, useEffect } from "react";
import { Container, Navbar, Table } from "react-bootstrap";
import NavEmp from "./NavEmp";
const ShowSucursales = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
            axios
                .post("http://localhost/truper-project/public/api/searchSuc")
                .then((response) => {
                    setData(response.data);
                });
            setLoading(false);
            console.log(data);
        })();
    }, []);
    return (
        <>
            <NavEmp />
            <Container>
                <center>
                    <br />
                    <h2>Sucursales</h2>
                </center>
                <hr />
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Código sucursal</th>
                            <th>Nombre</th>
                            <th>Dirección</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((dataItem) => (
                            <tr key={dataItem.id}>
                                <td>{dataItem.id}</td>
                                <td>{dataItem.name}</td>
                                <td>{dataItem.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
};
export default ShowSucursales;

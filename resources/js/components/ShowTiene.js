import React, { useState, useEffect } from "react";
import { Container, Navbar, Table } from "react-bootstrap";
import NavEmp from "./NavEmp";
const ShowTiene = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
            axios
                .post("http://localhost/truper-project/public/api/searchProd")
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
                    <h2>Solicitudes de las sucursales</h2>
                </center>
                <hr />
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Código sucursal</th>
                            <th>Nombre</th>
                            <th>Categoría</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((dataItem) =>
                            dataItem.sucursal_id != null ? (
                                <tr key={dataItem.sucursal_id}>
                                    <td>{dataItem.sucursal_id}</td>
                                    <td>{dataItem.name}</td>
                                    <td>{dataItem.category}</td>
                                    <td>${dataItem.price}</td>
                                    <td>{dataItem.amount}</td>
                                </tr>
                            ) : null
                        )}
                    </tbody>
                </Table>
            </Container>
        </>
    );
};
export default ShowTiene;

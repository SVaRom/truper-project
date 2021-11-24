import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import NaviLog from "./NavLog";
const Home = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
            axios
                .post("http://localhost/truper-project/public/api/showProd")
                .then((response) => {
                    setData(response.data);
                });
            setLoading(false);
            console.log(data);
        })();
    }, []);
    return (
        <>
            <NaviLog />
            <Container>
                <center>
                    <br />
                    <h2>Productos</h2>
                </center>
                <hr />
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nombre</th>
                            <th>Categoría</th>
                            <th>Precio</th>
                            <th>Existencias</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((dataItem) => (
                            <tr key={dataItem.id}>
                                <td>{dataItem.id}</td>
                                <td>{dataItem.name}</td>
                                <td>{dataItem.category}</td>
                                <td>${dataItem.price}</td>
                                <td>{dataItem.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
};
export default Home;

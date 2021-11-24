import React, { useState } from "react";
import { Container, Table, Form, Button, Col, Row } from "react-bootstrap";
import NaviLog from "./NavLog";
const ShowCompras = () => {
    const [formValue, setformValue] = React.useState({
        email: "",
    });
    const [data, setData] = useState([]);

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("email", formValue.email);
        axios
            .post(
                "http://localhost/truper-project/public/api/showCompra",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Accept: "application/json",
                    },
                }
            )
            .then((response) => {
                console.log("response:");
                setData(response.data);
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <NaviLog />
            <Container>
                <center>
                    <br />
                    <h2>Mira tu historial de pedidos</h2>
                </center>
                <hr />
                <Form>
                    <Row className="align-items-center">
                        <Col sm={10} className="my-1">
                            <Form.Label
                                htmlFor="inlineFormInputName"
                                visuallyHidden
                            >
                                Confirma tu correo electrónico
                            </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Confirma tu correo electrónico"
                                name="email"
                                value={formValue.email}
                                onChange={onChange}
                            />
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Button
                                variant="secondary"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Mostrar pedidos
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <center>
                    <br />
                    <h2>Pedidos anteriores</h2>
                </center>
                <hr />
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Categoría</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((dataItem) => (
                            <tr key={dataItem.user_id}>
                                <td>{dataItem.name}</td>
                                <td>{dataItem.category}</td>
                                <td>{dataItem.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
};
export default ShowCompras;

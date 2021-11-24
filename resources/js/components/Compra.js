import React from "react";
import { Button, Container, Form, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";
import NaviLog from "./NavLog";
const Compra = () => {
    const [show, setShow] = React.useState(false);
    const [formValue, setformValue] = React.useState({
        name: "",
        email: "",
        amount: "",
    });
    let history = useNavigate();

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();

        const formData = new FormData();
        formData.append("email", formValue.email);
        formData.append("name", formValue.name);
        formData.append("amount", formValue.amount);
        axios
            .post(
                "http://localhost/truper-project/public/api/addCompra",
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
                console.log(response);
                history("/truper-project/public/ShowCompras");
            })
            .catch((error) => {
                console.log(error);
                setShow(true);
            });
    };
    return (
        <>
            <NaviLog />
            <Alert
                show={show}
                variant="danger"
                onClose={() => setShow(false)}
                dismissible
            >
                <center>
                    <Alert.Heading>No se pudo realizar el pedido</Alert.Heading>
                    <p>Verifica que los datos sean correctos...</p>
                </center>
            </Alert>
            <Container>
                <center>
                    <br />
                    <h2>Realiza un pedido</h2>
                </center>
                <hr />
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Nombre del producto</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre producto"
                            name="name"
                            value={formValue.name}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirma tu correo electrónico</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formValue.email}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Cantidad a pedir</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Cantidad"
                            name="amount"
                            value={formValue.amount}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <div align="center">
                        <Button variant="secondary" type="submit">
                            Realizar pedido
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};
export default Compra;

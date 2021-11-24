import React from "react";
import NavEmp from "./NavEmp";
import { useNavigate } from "react-router";
import { Container, Button, Form, Alert } from "react-bootstrap";
const Empleado = () => {
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
                "http://localhost/truper-project/public/api/addTieneSuc",
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
                history("/truper-project/public/ShowTiene");
            })
            .catch((error) => {
                console.log(error);
                setShow(true);
            });
    };
    return (
        <>
            <NavEmp />
            <Alert
                show={show}
                variant="danger"
                onClose={() => setShow(false)}
                dismissible
            >
                <center>
                    <Alert.Heading>No se pudo realizar el pedido</Alert.Heading>
                    <p>Verifica si los datos son correctos...</p>
                </center>
            </Alert>
            <Container>
                <center>
                    <br />
                    <h2>Realiza un pedido para la sucursal</h2>
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
export default Empleado;

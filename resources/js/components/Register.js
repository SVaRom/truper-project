import React from "react";
import { Button, Container, Form, Alert } from "react-bootstrap";
import Navi from "./Nav";
import axios from "axios";
import { useNavigate } from "react-router";
const Register = () => {
    const [show, setShow] = React.useState(false);
    const [formValue, setformValue] = React.useState({
        name: "",
        lastname: "",
        email: "",
        address: "",
        password: "",
    });
    let history = useNavigate();

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();

        const formData = new FormData();
        formData.append("name", formValue.name);
        formData.append("lastname", formValue.lastname);
        formData.append("email", formValue.email);
        formData.append("address", formValue.address);
        formData.append("password", formValue.password);

        axios
            .post(
                "http://localhost/truper-project/public/api/register",
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
                history("/truper-project/public/LoginForm");
            })
            .catch((error) => {
                console.log(error);
                setShow(true);
            });
    };
    return (
        <>
            <Navi />
            <Alert
                show={show}
                variant="danger"
                onClose={() => setShow(false)}
                dismissible
            >
                <center>
                    <Alert.Heading>
                        No se pudo realizar el registro
                    </Alert.Heading>
                    <p>Verifica que tus datos sean correctos...</p>
                </center>
            </Alert>
            <Container>
                <br />
                <br />
                <h1>Registrate</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            value={formValue.name}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Apellido"
                            name="lastname"
                            value={formValue.lastname}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo electr??nico</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formValue.email}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Direcci??n</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Direcci??n"
                            name="address"
                            value={formValue.address}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contrase??a</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formValue.password}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <div align="center">
                        <Button variant="secondary" type="submit">
                            Registrarse
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};
export default Register;

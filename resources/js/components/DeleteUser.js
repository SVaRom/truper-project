import React from "react";
import { Button, Container, Form, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";
import Navi from "./Nav";
const DeleteUser = () => {
    const [show, setShow] = React.useState(false);
    const [formValue, setformValue] = React.useState({
        email: "",
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
        formData.append("email", formValue.email);
        formData.append("password", formValue.password);
        axios
            .post(
                "http://localhost/truper-project/public/api/login",
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
                axios
                    .post(
                        "http://localhost/truper-project/public/api/deleteUser",
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
                        history("/truper-project/public/");
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                        setShow(true);
                    });
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
                        No se pudo realizar la eliminaci??n
                    </Alert.Heading>
                    <p>Verifica que tus datos sean correctos...</p>
                </center>
            </Alert>
            <Container>
                <br />
                <br />
                <h1>Una lastima que quieras eliminar tu cuenta...</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirma tu correo electr??nico</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formValue.email}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirma tu contrase??a</Form.Label>
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
                            Eliminar mi cuenta
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};
export default DeleteUser;

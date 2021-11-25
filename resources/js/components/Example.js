import React from "react";
import { Button, Container, Form, Alert } from "react-bootstrap";
import Navi from "./Nav";
import axios from "axios";
import { useNavigate } from "react-router";
const LoginForm = () => {
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
        console.log(formValue.password);

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
                history("/truper-project/public/Home");
            })
            .catch((error) => {
                console.log(error);
                if (formValue.password == "empleadoTruper") {
                    axios
                        .post(
                            "http://localhost/truper-project/public/api/loginEmp",
                            formData,
                            {
                                headers: {
                                    "Content-Type": "multipart/form-data",
                                    Accept: "application/json",
                                },
                            }
                        )
                        .then((response) => {
                            if (response.data[0].email == formValue.email) {
                                console.log("response:");
                                console.log(response);
                                history("/truper-project/public/Empleado");
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                            setShow(true);
                        });
                } else if (
                    formValue.password == "root" &&
                    formValue.email == "admin@truper.com"
                ) {
                    history("/truper-project/public/AddProducto");
                } else setShow(true);
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
                    <Alert.Heading>No se pudo iniciar sesión</Alert.Heading>
                    <p>Verifica si tus datos son correctos...</p>
                </center>
            </Alert>
            <Container>
                <br />
                <br />
                <h1>Inicia sesión</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formValue.email}
                            onChange={onChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formValue.password}
                            onChange={onChange}
                        />
                        <br />
                    </Form.Group>
                    <div align="center">
                        <Button
                            align="center"
                            variant="secondary"
                            type="submit"
                        >
                            Iniciar sesión
                        </Button>
                    </div>
                </Form>
                <br />
                <div align="center">
                    <a href={"/truper-project/public/Register"}>Registrarse</a>
                    {" | "}
                    <a href={"/truper-project/public/DeleteUser"}>
                        Eliminar mi cuenta
                    </a>
                    {" | "}
                    <a href={"/truper-project/public/changePass"}>
                        Olvidé mi contraseña
                    </a>
                </div>
            </Container>
        </>
    );
};
export default LoginForm;

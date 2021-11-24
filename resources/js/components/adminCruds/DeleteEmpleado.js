import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import AdminEmpleados from "../AdminEmpleados";
import { useNavigate } from "react-router";
const DeleteEmpleado = () => {
    const [formValue, setformValue] = React.useState({
        email: "",
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

        axios
            .post(
                "http://localhost/truper-project/public/api/deleteEmp",
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
                console.log("Jalo wuuuuuu");
                history("/truper-project/public/ShowEmpleados");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <AdminEmpleados />
            <Container>
                <br />
                <br />
                <h1>Elimina un empleado</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Correo electrónico del empleado</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formValue.email}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <div align="center">
                        <Button variant="secondary" type="submit">
                            Eliminar empleado
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};
export default DeleteEmpleado;

import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import AdminSucursales from "../AdminSucursales";
import { useNavigate } from "react-router";
const DeleteSucursal = () => {
    const [formValue, setformValue] = React.useState({
        name: "",
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

        axios
            .post(
                "http://localhost/truper-project/public/api/deleteSuc",
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
                history("/truper-project/public/ShowSucursal");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <AdminSucursales />
            <Container>
                <br />
                <br />
                <h1>Elimina una sucursal</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre de la sucursal</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            value={formValue.name}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <div align="center">
                        <Button variant="secondary" type="submit">
                            Eliminar sucursal
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};
export default DeleteSucursal;

import React from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";
import AdminSucursales from "../AdminSucursales";
import { useNavigate } from "react-router";
const AddSucursal = () => {
    const [show, setShow] = React.useState(false);
    const [formValue, setformValue] = React.useState({
        name: "",
        address: "",
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
        formData.append("address", formValue.address);

        axios
            .post(
                "http://localhost/truper-project/public/api/addSuc",
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
                setShow(false);
            });
    };
    return (
        <>
            <AdminSucursales />
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
                    <p>Verifica si los datos son correctos...</p>
                </center>
            </Alert>
            <Container>
                <br />
                <br />
                <h1>Agrega una nueva sucursal</h1>
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
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Dirección"
                            name="address"
                            value={formValue.address}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <div align="center">
                        <Button variant="secondary" type="submit">
                            Agregar Sucursal
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};
export default AddSucursal;

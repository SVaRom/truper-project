import React from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";
import AdminEmpleados from "../AdminEmpleados";
import { useNavigate } from "react-router";
const AddEmpleado = () => {
    const [show, setShow] = React.useState(false);
    const [formValue, setformValue] = React.useState({
        name: "",
        lastname: "",
        address: "",
        email: "",
        name_sucursal: "",
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
        formData.append("address", formValue.address);
        formData.append("email", formValue.email);
        formData.append("name_sucursal", formValue.name_sucursal);

        axios
            .post(
                "http://localhost/truper-project/public/api/addEmp",
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
                setShow(true);
            });
    };
    return (
        <>
            <AdminEmpleados />
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
                <h1>Agrega un nuevo empleado</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            value={formValue.name}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Apellido"
                            name="lastname"
                            value={formValue.lastname}
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
                    <Form.Group className="mb-3" controlId="formBasicPassword">
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
                        <Form.Label>Nombre de la sucursal</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Sucursal"
                            name="name_sucursal"
                            value={formValue.name_sucursal}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <div align="center">
                        <Button variant="secondary" type="submit">
                            Agregar empleado
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};
export default AddEmpleado;

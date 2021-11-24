import React from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";
import Admin from "../Admin";
import { useNavigate } from "react-router";
const UpdateProducto = () => {
    const [show, setShow] = React.useState(false);
    const [formValue, setformValue] = React.useState({
        name: "",
        price: "",
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
        formData.append("category", formValue.category);
        formData.append("price", formValue.price);
        formData.append("amount", formValue.amount);

        axios
            .post(
                "http://localhost/truper-project/public/api/changeProd",
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
                history("/truper-project/public/ShowProductos");
            })
            .catch((error) => {
                console.log(error);
                setShow(false);
            });
    };
    return (
        <>
            <Admin />
            <Alert
                show={show}
                variant="danger"
                onClose={() => setShow(false)}
                dismissible
            >
                <center>
                    <Alert.Heading>No se pudo realizar el cambio</Alert.Heading>
                    <p>Verifica si los datos son correctos...</p>
                </center>
            </Alert>
            <Container>
                <br />
                <br />
                <h1>Modificar precio del producto</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre del producto</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            value={formValue.name}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Nuevo precio</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Precio"
                            name="price"
                            value={formValue.price}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <div align="center">
                        <Button variant="secondary" type="submit">
                            Modificar precio
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};
export default UpdateProducto;

import React from "react";
import Navi from "./Nav";
import { Container } from "react-bootstrap";
const About = () => {
    return (
        <>
            <Navi />
            <Container>
                <br />
                <img
                    src="images/60.jpeg"
                    width="1100"
                    height="450"
                    className="d-inline-block align-top"
                    alt="Truper logo"
                />
                <br />
                <br />
                <center>
                    <b>
                        <h4>
                            Somos la empresa más reconocida en Latinoamérica en
                            manufactura, distribución y comercialización de
                            herramientas y productos para todos los segmentos de
                            la industria ferretera.
                            <br />
                            <br />
                            Nuestro catálogo está en constante crecimiento,
                            incluye más de 12,000 productos. El buen desempeño
                            de estos está garantizado por el Centro de Calidad
                            Avanzada Truper CCAT, el laboratorio de calidad más
                            avanzado del mundo en el sector ferretero.
                            <br />
                            <br />
                            Contamos con 7 marcas especializadas por segmento:
                            Herramientas con la mejor relación calidad-precio.
                            Además, fabricamos productos para las marcas
                            privadas más prestigiosas de EE.UU.
                        </h4>
                    </b>
                </center>
            </Container>
        </>
    );
};
export default About;

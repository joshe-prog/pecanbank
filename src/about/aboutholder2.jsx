import React from "react";
import img from "../assets/pexels-picha-6211212 1.png";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../App.css";

function Aboutholder2() {
    return (
        <div>
            <Container
                fluid
                style={{
                    width: "89%",
                    marginTop: "100px",
                }}
            >
                <Row>
                    <Col
                    md={6}
                        className="abouth d-flex"
                        style={{
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <div>
                            <h2 className="abouth">
                             Block and unblock card on the go
                            </h2>
                            <p className="aboutp1">
                        Not sure where you dropped your card? Secure your money by blocking the card in-app and unblocking it when you eventually find it. You can also request a new card with just a tap.
                            </p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img className="aboutimg ps-0 ps-md-5" src={img} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Aboutholder2;

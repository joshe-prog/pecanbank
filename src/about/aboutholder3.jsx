import React from "react";
import img from "../assets/pexels-picha-6211212 1.png";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../App.css";

function Aboutholder3() {
    return (
        <div>
            <Container
                fluid
                style={{
                    width: "89%",
                    marginTop: "100px",
                    marginBottom:"110px"
                }}
            >
                <Row>
                    <Col md={6}>
                        <img className="aboutimg" src={img} alt="" />
                    </Col>
                    <Col
                        md={6}
                        className="abouth d-flex"
                        style={{
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <div className="">
                            <h2 className="abouth  ">Better tidings</h2>
                            <p className="aboutp1">
                                Individuals of various types have joined us on
                                this journey since we started. From the unbanked
                                low income earners opening their first accounts
                                with us to digitally-savvy high-net-worth
                                individuals (HNIs) who love our approach to
                                banking, we are always improving our services to
                                meet the needs of our growing customers.
                                <br /> <br />
                                Our name may have changed, but our goal remains
                                the same: To provide financial services that
                                improve the overall quality of the lives of our
                                customers, no matter who or where they are.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Aboutholder3;

import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import img1 from "../assets/interest 1.png"

function Loanajo2() {
    return (
        <div style={{}}>
            <Container
                fluid
                style={{
                    width: "90%",
                }}
            >
                <p className="title">Features</p>
                <Row
                    className=" justify-content-between g-3"
                    style={{
                        marginTop: "50px",
                    }}
                >
                    <Col xs={6} lg={3} className="">
                        <div className="box1">
                            <img src={img1} alt="" />
                            <p className="box1p">
                                Instant Payment <br /> Notifications
                            </p>
                        </div>
                    </Col>
                    <Col xs={6} lg={3} className="">
                        <div className="box1">
                            <img src={img1} alt="" />
                            <p className="box1p">
                                Microinsurance <br /> Cover
                            </p>
                        </div>
                    </Col>
                    <Col xs={6} lg={3} className="">
                        <div className="box1">
                            <img src={img1} alt="" />
                            <p className="box1p">
                                Seamless Digital <br /> Signup
                            </p>
                        </div>
                    </Col>
                    <Col xs={6} lg={3} className="p5">
                        <div className="box1">
                            <img src={img1} alt="" />
                            <p className="box1p">
                                Instant <br /> Settlement
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Loanajo2;

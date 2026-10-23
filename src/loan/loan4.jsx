import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../assets/pexels-kampus-production-8476604 1 (1).png";
import "../App.css";


function Loan4() {
    return (
        <section className="" style={{
            marginBottom: "100px"
        }}>
            <Container>
                <Row className="align-items-center g-3 g-md-5">
                    <Col xs={12} md={6}>
                        <h2 className="title">
                       Payday Loan
                        </h2>
                        <p className="desc1">
                         Sort out your bills and other emergency payments with our payday loans. Get up to 2x your current monthly salary before the actual payment arrives at competitive rates.
                        </p>
                    </Col>

                    <Col
                        xs={12}
                        md={6}
                        style={
                            {
                                // width:"80%",
                            }
                        }
                    >
                        <div className="visual ">
                            <div className="frame" />
                            <div className="photo">
                                <img src={img} alt="" className="padfimg" />
                   
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Loan4;

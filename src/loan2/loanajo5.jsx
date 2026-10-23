import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../App.css";
import img from "../assets/pexels-nappy-3602931 1.png";
function Loanajo5() {
    return (
        <div className="issue">
            <section className="branchless-section mt-5 pt-5 ">
                <Container>
                    <Row className="align-items-center g-3 g-md-5">
                        <Col xs={12} md={6}>
                            <div className="branchless-visual">
                                <div className="branchless-frame" />
                                <img
                                    className="branchless-img"
                                    src={img}
                                    alt=""
                                />
                            </div>
                        </Col>

                        <Col xs={12} md={6}>
                            <h2 className="title mt-5">
                                Cash Collateral Lending
                            </h2>
                            <p className="desc1">
                                Experience hassle-free Cash Collateral Lending
                                with us, allowing you to borrow up to 2 times
                                your savings effortlessly. Your financial goals
                                are within reach!
                            </p>
                            <button className="default-but">Apply Now</button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Loanajo5;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../assets/pexels-kampus-production-8476604 1 (1).png";
import "../App.css";
import img1 from "../assets/Vector (10).png";
const Personalaccount2 = () => {
    return (
        <section className="py-5">
            <Container>
                <Row className="align-items-center g-3 g-md-5">
                    <Col xs={12} md={6}>
                        <h2 className="title">Instant account opening</h2>
                        <p className="desc">
                            You will gain full access to your account and in no
                            time, you will be able to spend, save and receive
                            money from anywhere in Nigeria using your account
                            number.
                        </p>
                    </Col>

                    <Col xs={12} md={6} style={{
                        // width:"80%",
              
                   
                    }} >
                        <div className="visual ">
                            <div className="frame" />
                            <div className="photo">
                                <img src={img} alt="" className="padfimg" />
                                <div className="notif" >
                                    <div className="notif-head d-flex justify-content-between">
                                        <div className="d-flex">
                                            <img
                                                src={img1}
                                                alt=""
                                                style={{
                                                    width: "12px",
                                                    height: "17px",
                                                }}
                                            />
                                            <span>Pecan</span>
                                        </div>
                                        <div >
                                            <small className="now">Now</small>
                                        </div>
                                    </div>
                                    <p className="notifyp" >
                                        Congratulations! Your account has been
                                        upgraded to tier 2
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Personalaccount2;

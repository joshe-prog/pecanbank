import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import img1 from "../../assets/mobile 1.png";
import img2 from "../../assets/family 1.png";
import img3 from "../../assets/signup.png";
import img4 from "../../assets/handshake.png";
import img5 from "../../assets/loan 1.png";
import img6 from "../../assets/provider 1.png";
import img7 from "../../assets/mentorship 1.png";
import img8 from "../../assets/atm-card 1.png";
import img9 from "../../assets/interest 1.png";
import img10 from "../../assets/no 1.png";
import img11 from "../../assets/24-hour-service 1.png";

const Homesection6 = () => {
    return (
        <div
            style={{
                backgroundColor: "#F4F4F4",
                marginTop: "67px",
                paddingBottom: "115px",
            }}
        >
            <Container
                fluid
                style={{
                    width: "90%",
                }}
            >
                <div
                    style={{
                        paddingTop: "67px",
                    }}
                >
                    <h1 className="box1h1">
                        Everything you can enjoy with Pecan
                    </h1>
                </div>
                <Row
                    className=" justify-content-between g-3"
                    style={{
                        marginTop: "110px",
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
                            <img src={img2} alt="" />
                            <p className="box1p">
                                Microinsurance <br /> Cover
                            </p>
                        </div>
                    </Col>
                    <Col xs={6} lg={3} className="">
                        <div className="box1">
                            <img src={img3} alt="" />
                            <p className="box1p">
                                Seamless Digital <br /> Signup
                            </p>
                        </div>
                    </Col>
                    <Col xs={6} lg={3} className="">
                        <div className="box1">
                            <img src={img4} alt="" />
                            <p className="box1p">
                                Instant <br /> Settlement
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row
                    className=" justify-content-between g-3"
                    style={{
                        marginTop: "20px",
                    }}
                >
                    <Col xs={6} lg={3} className="">
                        <div className="box1">
                            <img src={img5} alt="" />
                            <p className="box1p">Quick loans</p>
                        </div>
                    </Col>
                    <Col xs={6} lg={3} className="">
                        <div className="box1">
                            <img src={img6} alt="" />
                            <p className="box1p">
                                USSD and internet <br />
                                banking
                            </p>
                        </div>
                    </Col>
                    <Col xs={6} lg={3} className="">
                        <div className="box1">
                            <img src={img7} alt="" />
                            <p className="box1p">
                                Financial <br />
                                mentorship/advisory
                            </p>
                        </div>
                    </Col>
                    <Col xs={6} lg={3} className="">
                        <div className="box1">
                            <img src={img8} alt="" />
                            <p className="box1p">
                                Functional debit <br />
                                cards
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row
                    className=" justify-content-between g-3"
                    style={{
                        marginTop: "20px",
                    }}
                >
                    <Col xs={6} lg={3} className="">
                        <div className="box1">
                            <img src={img9} alt="" />
                            <p className="box1p">
                                Instant Payment <br /> Notifications
                            </p>
                        </div>
                    </Col>
                    <Col xs={6} lg={3} className="">
                        <div className="box1">
                            <img src={img10} alt="" />
                            <p className="box1p">
                                Microinsurance <br /> Cover
                            </p>
                        </div>
                    </Col>

                    <Col xs={12} lg={6} className="">
                        <div className="box2">
                            <img src={img11} alt="" />
                            <p className="box1p">
                                Instant <br /> Settlement
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Homesection6;

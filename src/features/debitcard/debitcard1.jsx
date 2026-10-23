import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import img from "../../assets/Mask group (1).png";

const Debitcard1 = () => {
    return (
        <div
            className="issue"
            style={{
                height: "374px",
                backgroundColor: "#1C9FF3",
          
            }}
        >
            <Container
                fluid
                style={{
                    width: "90%",
                }}
            >
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "257px",
                                display: "flex",
                                flexDirection: "column",

                                justifyContent: "space-between",
                                marginTop: "34px",
                            }}
                        >
                            <div className="">
                                <h2 className="workh">
                                    Cards that work <br />

                                    everywhere, anytime
                                </h2>
                            </div>
                            <div>
                                <p className="workp">
                                    Our cards are not only aesthetically
                                    pleasing; they are also efficient. Order a
                                    physical Pecan debit card and we’ll deliver
                                    to you quickly or start spending
                                    straightaway with your virtual card.
                                </p>
                            </div>
                            <div>
                                <button className="default-but1">
                                    Get Started Now
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="line  " />
                        <div className="herophoto">
                            <img src={img} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Debitcard1;

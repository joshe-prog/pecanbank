import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import img from "../assets/pretty-young-woman-looking-surprised-excited-while-looking-her-phone 1.png";

function Loan1() {
    return (
        <>
            <div
                className="issue2"
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
                                        Take care of your needs conveniently
                                    </h2>
                                </div>
                                <div>
                                    <p className="workp">
                                        Our personal and business loans can help
                                        you meet sudden needs like travel
                                        expenses, staff salaries, medical bills,
                                        take care of a major purchase like
                                        buying a new or used car and pay back at
                                        your own pace.
                                    </p>
                                </div>
                                <div>
                                    <button className="default-but1">
                                        Get loan
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="line  " />
                            <div className="herophoto">
                                <img
                                    src={img}
                                    alt=""
                                    style={{
                                        borderRadius: "20px",
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </>
    );
}

export default Loan1;

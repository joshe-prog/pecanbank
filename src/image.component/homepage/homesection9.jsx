import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import img from "../../assets/Symbols.png";
import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";
import twit from "../../assets/Group 35.png";
const Homesection9 = () => {
    return (
        <div
            style={{
                backgroundColor: "#F4F4F4",
            }}
        >
            <Container
                fluid
                style={{
                    width: "93%",
                    paddingTop: "52px",
                    // backgroundColor: "yellowgreen",
                }}
            >
                <Row className="">
                    <Col
                        md={6}
                        className="d-flex justify-content-center justify-content-md-start "
                    >
                        <div className="pe-2 pe-md-3">
                            <p className="hs9follow">Follow us on </p>
                        </div>
                        <div
                            style={{
                                marginTop: "3px",
                                width: "110px",
                                display: "flex",
                                justifyContent: "space-between",
                                // backgroundColor: "yellow",
                            }}
                        >
                            <a href="http://">
                                {" "}
                                <img src={ig} alt="" />
                            </a>
                            <a href="http://">
                                {" "}
                                <img src={fb} alt="" />
                            </a>
                            <a href="http://">
                                <img src={twit} alt="" />
                            </a>
                        </div>
                    </Col>
                    <Col
                        md={6}
                        className=" d-flex justify-content-center   justify-content-md-end  mb-5"
                    >
                        {" "}
                        <a href="http://">
                            {" "}
                            <button className="igbutton d-flex align-items-center "  style={{
                                textDecoration:"none"
                            }} >
                                Visit our Instagram Page
                            </button>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Homesection9;

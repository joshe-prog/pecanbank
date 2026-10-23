import React from 'react'
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import img from "../assets/pexels-karolina-grabowska-4386467 1.png";


function Insure1() {
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
                                  Health insurance plans everyday people can swear by
                                </h2>
                            </div>
                            <div>
                                <p className="workp">
                                 Enjoy access to basic health insurance cover without paying through the nose. Our paid micro-insurance plans ensure you gain access to quality healthcare through your phone or at hospitals nationwide, if you ever need to.
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
                            < img src={img} alt=""  style={{
                                borderRadius:"20px"
                            }} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default Insure1

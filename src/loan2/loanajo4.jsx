import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import img from "../assets/pexels-kampus-production-8476604 1 (1).png";
function Loanajo4() {
    return (
        <section
            className=""
            style={{
                marginBottom: "100px",
            }}
        >
            <Container>
                <Row className="align-items-center g-3 g-md-5">
                    <Col xs={12} md={6}>
                        <h2 className="title">Asset Financing</h2>
                        <p className="desc1">
                     Protect your liquidity and streamline cash flow with our Asset Financing solution. Whether you're looking to purchase new delivery vans, machinery or land, our financing solution provides the right opportunity to expand and grow your business without fuss.
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

export default Loanajo4;

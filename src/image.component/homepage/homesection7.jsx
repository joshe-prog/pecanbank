import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import img from  "../../assets/vidtest.png"

const Homesection7 = () => {
    return (
        <div style={{
            marginTop:"100px",
            }}>
            <Container fluid style={{
                width:"90%"
            }}>
                <Row>
                    <Col md={6} className=" d-flex align-items-center">
                        <h1 className="vidh">What people are saying about us</h1>
                    </Col>
                    <Col md={6}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ayeJa-fs2vs?si=zKbRI0Y-kUczDHfM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Homesection7;

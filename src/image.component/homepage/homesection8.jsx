import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import img from "../../assets/Symbols.png"

function Homesection8() {
    return (
        <div
            style={{
                marginTop: "120px",
                paddingBottom:"100px"
            }}
            className="d-none d-md-flex"
        >
            <Container className="w-100 w-md-75 s8parent ">
                <Row>
                    <Col md={7} className=" d-flex justify-content-end" style={{
                        width:"50%",

                    }}>
                        <h3 className="s8h">
                            Sign up to open a savings account perfect for your
                            everyday money needs
                        </h3>
                    </Col>
                    <Col md={4} className="  d-flex  flex-md-column  align-items-end" style={{
                        width:"30%"
                    }} >
                        <p className="s8p">
                            Join Pecan today to get your physical or virtual
                            debit card. Download our app to sign up and order
                            your physical card.
                          
                        </p>
                      <div className="h8-flower">
                          <button className="default-but" >
                            Get Started Now{" "}
                        </button>
                      </div>
                    </Col>
                    <Col md={1} className="s8child">
                    <img  className="plant" src={img} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Homesection8;

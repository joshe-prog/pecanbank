import React from "react";
import img3 from "../../assets/Group 1000001843.png";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../../App.css";

function Homesection5() {
    return (
        <div
            className="  d-flex justify-content-center "
            style={{
                marginTop: "51px",
                backgroundColor: "white",
            }}
        >
            <Container
                fluid
                className=" d-flex justify-content-center m-0 p-0 "
                style={{
                    width: "91%",
                }}
            >
                <Row className=" justify-content-start align-items-center w-100 m-0 p-0 ">
                    <Col md={6} className="">
                        <h1 className="h1style">
                            Safety nets you can always count on
                        </h1>
                        <p className="hsp">
                            Our savings account comes with short-term overdraft
                            that gets you ready for the unexpected. Say bye bye
                            to the days of paying medical bills out of your
                            pocket, with our embedded micro-insurance plans you
                            can now enjoy access to very affordable healthcare
                            cover all year long. No document or additional
                            paperwork required.
                        </p>
                        <button className="default-but">Get started now</button>
                    </Col>
                    <Col md={6} className="">
                        <img className="imgmar" src={img3} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Homesection5;

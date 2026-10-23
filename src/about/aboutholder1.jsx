import React from "react";
import "../App.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import img from "../assets/pexels-antoni-shkraba-production-8374456 1.png";
import "../App.css";

const Aboutholder1 = () => {
    return (
        <Row
            style={{
           backgroundColor: "#E1F1FF",
                width: "100%",
                margin: "0px",
                padding: "0px",
                display: "flex",
                // justifyContent: "space-between",
            }}
        >
            <Col md={5} className="p-0 m-0 abimgh">
                <img className="aboutimg" fluid src={img} alt="" />
            </Col>

            <Col
                md={7}
                
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                }}
            >
                <div className="colab">
                    {" "}
                    <h3 className="abouth">Our Story</h3>
                    <p className="aboutp">
                        Since 2016, Pecan has operated with the sole purpose of
                        bringing access to quality financial products to
                        unbanked individuals, particularly, women and their
                        small businesses in Nigeria.
                        <br /> <br />
                        During this period, we introduced hundreds of young and
                        middle-aged unbanked Nigerians to the banking ecosystem,
                        helping them to open and run their first-ever bank
                        accounts. To these freshly-banked people, the financial
                        system is a needlessly complicated one. So, when they
                        think of the hoops they have to endure just to access
                        financial services, they’d rather just sit it out.
                    </p>
                </div>
            </Col>
        </Row>
    );
};

export default Aboutholder1;

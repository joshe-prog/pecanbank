import React from "react";
import img from "../assets/5758202_2987331-ai 1 (1).png";
import { Col, Row } from "react-bootstrap";

const Personalaccount5 = () => {
    return (
        <div
            className="p-0"
            style={{
                marginTop: "166px",
            }}
        >
            <Row className="p-0 container-fluid">
                <Col md={6} className=" ">
                    <div
                        className="p5h d-flex align-items-center "
                        style={{
                            backgroundColor: "#1C9FF3",
                        }}
                    >
                        < img src={img} alt="" className="wfm" />
                  
                    </div>
                </Col>
                <Col md={6} style={{
                      display:"flex",
                      flexDirection:"column",
                      justifyContent:"center"
                    }}>
                    <div className="" >
                        <h2 className="map1">Perfect for Nigerians in Nigeria and diaspora</h2>
                        <p className="mapp">
                            We have specially made our savings product for you,
                            no matter where you belong, whether you’re banked,
                            underbanked or overbanked. You can open an account
                            with us if you live anywhere in the 36 states in
                            Nigeria — or abroad.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Personalaccount5;

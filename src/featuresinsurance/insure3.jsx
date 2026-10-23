import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import img from "../assets/pexels-ivan-samkov-4989168 1.png";
import "../App.css";
import img1 from "../assets/Vector (10).png";

const Insure3 = () => {
  return (
    <section className="">
            <Container>
                <Row className="align-items-center g-3 g-md-5">
                    <Col xs={12} md={6}>
                        <h2 className="title">Quality medical care at your fingertips</h2>
                        <p className="desc1">
                           Speak with a medical professional without the hassle of hospital queues, our plans offer you 14-hour daily telemedicine services so that you can get the medical aid you need anywhere, anytime.
                        </p>
                    </Col>

                    <Col xs={12} md={6} style={{
                        // width:"80%",
              
                   
                    }} >
                        <div className="visual ">
                            <div className="frame" />
                            <div className="photo">
                                <img src={img} alt="" className="padfimg" />
                                <div className="notif" style={{
                                    height:"65px"
                                }} >
                                    <div className="notif-head d-flex justify-content-between">
                                        <div className="d-flex">
                                            <img
                                                src={img1}
                                                alt=""
                                                style={{
                                                    width: "12px",
                                                    height: "17px",
                                                }}
                                            />
                                            <span>Pecan</span>
                                        </div>
                                        <div >
                                            <small className="now">Now</small>
                                        </div>
                                    </div>
                                    <p className="notifyp" >
                                       Speak with a consultant
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
  )
}

export default Insure3

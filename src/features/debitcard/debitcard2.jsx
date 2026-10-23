import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import img from "../../assets/pexels-greta-hoffman-9706141 1.png";
import "../../App.css";


function Debitcard2() {
    return (
        <div className='issue'
         
        >
            <section className="branchless-section  ">
                <Container>
                    <Row className="align-items-center g-3 g-md-5">
                        <Col xs={12} md={6}>
                            <div className="branchless-visual">
                                <div className="branchless-frame" />
                                <img
                                    className="branchless-img"
                                    src={img}
                                    alt=""
                                />
                            </div>
                        </Col>

                        <Col xs={12} md={6}>
                            <h2 className="title mt-5">
                               Spend money anywhere, anytime
                            </h2>
                            <p className="desc1">
                               Our Verve, Visa and Mastercards give you a variety of options so that you can make payment online and offline and withdraw from thousands of ATMs nationwide without fuss.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Debitcard2;

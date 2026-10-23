import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import img from "../assets/young-african-american-woman-holding-piggy-bank-screaming-proud-celebrating-victory-success-very-excited-with-raised-arm 1.png";
import "../App.css";

function Loan3() {
  return (
          <div className='issue'
         
        >
            <section className="branchless-section mt-5 pt-5 ">
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
                            Ajo Savings Loan
                            </h2>
                            <p className="desc1">
                              Our easy spin on the traditional Ajo thrift system ensures you get the money you need at the time you need it, whether business or personal, you can count on us.</p>
                              <button className='default-but'>Get loan</button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
  )
}

export default Loan3

import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import img from "../assets/pexels-anna-shvets-11369289 1 (1).png"
import "../App.css";


function Insure2() {
  return (
          <div className='issue1'
         
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
                               Small premiums, big benefits
                            </h2>
                            <p className="desc1">
                               The sweetest part is you don’t need any additional registration or paperwork. Simply choose from three levels of cover — basic, standard and premium — and we’ve got you covered.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
  )
}

export default Insure2

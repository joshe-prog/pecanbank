import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import img from "../assets/pexels-ketut-subiyanto-4350300 1.png";
import "../App.css";

function Personalaccount4() {
  return (
    <div style={{
      marginTop:"165px"
    }} >
         <section className="branchless-section  "  >
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
            <h2 className="title">
              Branchless, <br /> so no delay
            </h2>
            <p className="desc">
              With our USSD code *#7006*17# and our mobile app, you will get
              your digital account number so fast, no walk-ins and no phone
              calls needed.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default Personalaccount4

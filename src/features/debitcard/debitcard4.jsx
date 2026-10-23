import React from 'react'

import { Col, Container, Row } from "react-bootstrap";
import img from "../../assets/Group 1000001814.png";
function Debitcard4() {
  return (
            <div className="" style={{
            margin:"100px 0px"
        }}>
            <Container className="  d-flex posi ">
                <div className="posifl">
                    <img src={img} alt="" className="" />
                </div>

                <div
                className="d-flex flex-column align-items-center justify-content-center  flowerback"
                    style={{
                         width: "3700px",
                       height:"",
                        boxShadow:" 20px 20px 200px 20px #D6D6D640"

                    }}
                >
                    <h2 className="flowerh">
                        Sign up for a prepaid debit card account
                    </h2>
                    <p className="flowerp" >
                        Join Pecan today to get your physical or virtual debit card. Download our app to sign up and order your physical card.
                    </p>
                    <button className="default-but">Get Started Now </button>
                </div>
                <div className=" d-flex justify-content-end posir">
                    <img src={img} alt="" className="test1"  />
                </div>
            </Container>
        </div>
  )
}

export default Debitcard4

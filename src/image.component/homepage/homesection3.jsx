import React, { Component } from "react";
import Component1 from "../../component/Component";
import img3 from "../../assets/Group 1000001843.png";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../../App.css"

function Homesection3() {
    return (
        <div className="  d-flex justify-content-center " style={{
          marginTop:"51px",
          backgroundColor :"#F4F4F4"
        }}>
            <Container fluid className=" d-flex justify-content-center m-0 p-0 " style={{
      
              width:"91%"

            }} >
                <Row className=" justify-content-start align-items-center w-100 m-0 p-0 ">
                    <Col md={6} className="">
                        <h1 className="h1style">Make better money move</h1>
                        <p className="hsp">Settle bills and buy airtime to unlock exclusive rewards, set budgets for everyday things like data, food and more or stash money to enjoy up to 15% interest rates on your savings.</p>
                        <button className="default-but">Get started now</button>
                    </Col>
                    <Col md={6}  className="" >
                        <img className="imgmar" src={img3} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Homesection3;

import React from "react";
import img from "../assets/Group 1000001847 1.png";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Personalaccount1() {
    return (
        <div>
            <Container fluid className="">
                <Row>
                    <Col md={6}>
                    <img  className="aboutimg" src={img} alt="" />
                    </Col>
                    <Col md={6} className="" style={{
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center"
                    }}>
                    <h2 className="personalh" >Make the most out of your money</h2>
                    <p className="personalp">Open a quick savings account with just your phone number. Download the Pecan App to start spending and saving with Pecan.</p>
                    <button className="default-but">Get Started Now</button>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
}

export default Personalaccount1;

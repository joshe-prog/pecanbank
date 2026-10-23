import React from "react";
import { Col, Row } from "react-bootstrap";
import img from "../assets/pexels-antoni-shkraba-production-8374456 2.png";
import img1 from "../assets/Pecan Logo 2.png";
import "../App.css";
import logo from "../assets/Vector (11).png";
import { useNavigate } from "react-router-dom";

function Startbut2() {
    const navigate = useNavigate();
    return (
        <Row className="p-0 m-0">
            <Col
                md={5}
                className="p-0 m-0 bgfs d-none d-md-flex  justify-content-center"
            >
                {" "}
                <div
                    className=" d-flex align-items-end justify-content-between"
                    style={{
                        width: "85%",
                    }}
                >
                    <div
                        style={{
                            width: "290px",
                        }}
                    >
                        <p>
                            Our name may have changed, but our goal remains the
                            same
                        </p>
                    </div>
                    <div className="mb-4">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </Col>
            <Col md={7} className="mt-5 ps-2 m-0 sfb ps-5">
                <div>
                    <img src={img1} alt="" />
                    <h2 className="startedh2">Personal Details</h2>
                </div>
            </Col>
        </Row>
    );
}

export default Startbut2;

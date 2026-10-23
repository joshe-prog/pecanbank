import React from "react";
import { Col, Row } from "react-bootstrap";
import img from "../assets/pexels-antoni-shkraba-production-8374456 2.png";
import img1 from "../assets/Pecan Logo 2.png";
import "../App.css";
import logo from "../assets/Vector (11).png";
import { useNavigate } from "react-router-dom";
function Startedbut1() {
    const navigate=useNavigate()
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
                </div>
                <div>
                    <h2 className="startedh2">Opening Form</h2>
                    <p className="startedp">
                        Kindly fill in your details to get started. Ensure you
                        input correct details
                    </p>
                </div>
                <div>
                    <h3 className="startedh3">Account Type</h3>
                    <select className="s1">
                        <option value="">Savings</option>
                        <option value="">Current</option>
                        <option value="">Fixed Deposite</option>
                        <option value="">Joint</option>
                    </select>
                </div>
                <div >
                    <p className="startedh3 p">How did you hear about us?</p>
                    <div
                        className="d-flex align-items   justify-content-between"
                        style={{
                            width: "10%",
                        }}
                    >
                        <input
                            type="checkbox"
                            style={{
                                width: "18px",
                            }}
                        />
                        <p className="mt-3">Telesales</p>
                    </div>

                    <div
                        className="d-flex align-items   justify-content-between"
                        style={{
                            width: "10%",
                        }}
                    >
                        <input
                            type="checkbox"
                            style={{
                                width: "18px",
                            }}
                        />
                        <p className="mt-3">Telesales</p>
                    </div>
                    <div
                        className="d-flex align-items   justify-content-between"
                        style={{
                            width: "10%",
                        }}
                    >
                        <input
                            type="checkbox"
                            style={{
                                width: "18px",
                            }}
                        />
                        <p className="mt-3">Telesales</p>
                    </div>
                    <div
                        className="d-flex align-items   justify-content-between"
                        style={{
                            width: "10%",
                        }}
                    >
                        <input
                            type="checkbox"
                            style={{
                                width: "18px",
                            }}
                        />
                        <p className="mt-3">Telesales</p>
                    </div>
                    <div
                        className="d-flex align-items   justify-content-between"
                        style={{
                            width: "10%",
                        }}
                    >
                        <input
                            type="checkbox"
                            style={{
                                width: "18px",
                            }}
                        />
                        <p className="mt-3">Telesales</p>
                    </div>
                    <div
                        className="d-flex align-items   justify-content-between"
                        style={{
                            width: "10%",
                        }}
                    >
                        <input
                            type="checkbox"
                            style={{
                                width: "18px",
                            }}
                        />
                        <p className="mt-3">Telesales</p>
                    </div>
                    <div className="butsh">
                        {" "}
                        <button className="buts" onClick={()=>navigate("/createaccountstep-2")}> Next</button>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Startedbut1;

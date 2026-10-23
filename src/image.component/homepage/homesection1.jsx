import React from "react";
import NavBar from "../../component/navBar";
import Collapse from "react-bootstrap/esm/Collapse";
import CollapsibleExample from "../../component/navBar";
import Col from "react-bootstrap/esm/Col";
import R0w from "react-bootstrap/esm/Row";
import image1 from "../../assets/Group 1000001848 (1).png";
import ios from "../../assets/Vector (9).png";
import Container from "react-bootstrap/esm/Container";
import "../../App.css";
import playstore from "../../assets/playstore.png";
import qrcode from "../../assets/qrcode.png";

// import { FaApple } from "react-icons/fa";

const Homesection1 = () => {
    return (
        <div style={{
            marginBottom: "60px"
        }}>
            <Container
                fluid
                style={{
                    width: "90%",
                }}
                className=" d-flex "
            >
                <div
                    style={
                        {
                            // marginTop: "65px",
                        }
                    }
                    className="w-50  value"
                >
                    <h2>Value your Money</h2>
                    <p>
                        {" "}
                        Experience banking like never before. Spend, save,
                        invest and control your money right from your phone.
                        Open a free account with your phone number in just 2
                        minutes.
                    </p>
                    <button className="t">Open a Pecan account</button>

                    <div
                        className="test"
                        style={{
                            marginTop: "40px",
                            // display: "flex",
                            // backgroundColor:"yellow",
                            // justifyContent:"space-between",
                        }}
                    >
                        <div>
                            <a href="#" className="google-play ">
                                <span className="play-icon">
                                    <img src={playstore} alt="" />
                                </span>

                                <div>
                                    <small>GET IT ON</small>
                                    <strong>Google Play</strong>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="#" className="google-play">
                                <span className="play-icon">
                                    <img src={ios} alt="" />
                                </span>

                                <div>
                                    <small>DOWNLOAD ON</small>
                                    <strong>The App Store</strong>
                                </div>
                            </a>
                        </div>
                        <div
                            className="d-flex   qr-code "
                            style={{
                                width: "167px",
                                justifyContent: "space-between",
                                height: "40px",
                                display: "flex",
                            }}
                        >
                            {" "}
                            <div className="d-none d-md-flex">
                                <img
                                    style={{
                                        width: "35px",
                                        height: "40px",
                                    }}
                                    src={qrcode}
                                    alt=""
                                />
                            </div>
                            <div className="qr-code d-none d-md-flex">
                                <h4>
                                    Scan & Download <br />
                                    mypecanbank App
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-50  d-md-flex d-none">
                    <img src={image1} alt="" />
                </div>
            </Container>
        </div>
    );
};

export default Homesection1;
//  <div className="inTouchHolder">
//         <div className=" d-flex bg-danger">
//             <div
//                 style={{
//                     backgroundColor: "yellow",
//                     display: "flex",
//                     alignItems: "center",
//                 }}
//                 className=" d-flex "
//             >
//                 {" "}
//                 <img
//                     style={{
//                         width: "16px",
//                         height: "17px",
//                     }}
//                     src={ios}
//                     alt=""
//                 />
//             </div>
//             <div className="getInTouch  ">
//                 <p>Get In Touch</p>
//                 <h2>Google Play</h2>
//             </div>
//         </div>
//         <div></div>
//     </div>

// <div className="w-50 bg-info">
//     <img src={image1} alt="" />
// </div>

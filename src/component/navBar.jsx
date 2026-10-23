import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/Group 1000001851.svg";
import "../App.css";
import { useNavigate } from "react-router-dom";

function CollapsibleExample() {
    const navigate=useNavigate()
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            className=""
            style={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Container
                fluid
                className="  d-flex mx-md-5 px-md-5 justify-content-between mx-0 px-0"
                style={
                    {
                        // width: "100%",
                    }
                }
            >
                <Navbar.Brand href="/" className="">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto   w-50 d-flex justify-content-end ">
                        <Nav.Link href="/personalaza" className="nlink">
                            Personal Account
                        </Nav.Link>
                        <Nav.Link
                            href="/insure "
                            style={{
                                color: "",
                            }}
                            className="nlink"
                        >
                            Features
                        </Nav.Link>
                        <Nav.Link href="/loan" className="nlink">
                            Loan
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#pricing" className="">
                            <button className="navbut" onClick={()=>navigate("/createaccount")}
                            
                            >
                                Get Started
                            </button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;

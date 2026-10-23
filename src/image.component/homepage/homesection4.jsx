import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import img from "../../assets/Group 1000001843 (2).png";
import Col from "react-bootstrap/esm/Col";

function Homesection4() {
    return (
        <div style={{
            backgroundColor: "#E1F1FF",
        }}>
            <Container
                fluid
               
                style={{
                    width: "90%",
                    marginTop: "51px",
backgroundColor: "#E1F1FF",
                   
                }}
            >
                <Row className="d-flex justify-content-between align-items-center">
                    <Col md={5}>
                        {" "}
                        <img src={img} alt="" className="imgmar" />
                    </Col>

                    <Col
                        md={5}
                    
                    >
                        <div className="" style={{}}>
                            <h1 className="h1style">
                                Unlock financial prosperity{" "}
                            </h1>
                            <p className="hsp">
                                Get better at making, spending and stashing
                                money with our financial literacy program which
                                shows you how to have a better relationship with
                                your finances.
                            </p>
                            <button className="default-but">
                                {" "}
                                Get started now
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Homesection4;

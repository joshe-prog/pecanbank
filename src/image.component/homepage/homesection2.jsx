import Container from "react-bootstrap/esm/Container";
import iosand from "../../assets/iosand.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../../App.css";
const Homesection2 = () => {
    return (
        <Container
            fluid
            className=" justify-content-center d-flex "
            style={{
                backgroundColor: "#E1F1FF",
            }}
        >
            <Row className="justify-content-center w-100 hs-2-1 ">
                <Col
                    md={5}
                    className=" w-50 d-flex hs-2-1 justify-content-start"
                >
                    <p className="hs-2 "> </p>

                <div className="imghov">
                        <img
                        src={iosand}
                        alt=""
                        style={{
                            borderRadius: "50%",
                        }} className="hov1"
                    />
                </div>
                </Col>
                <Col
                    md={5}
                    className="  d-flex flex-column justify-content-center  text-start mt-5"
                >
                    <h1 className="hs">No Branch</h1>
                    <h1 className="hs">No Problem</h1>
                    <p className="hsp">
                        Everything you can do in a branch all on your phone.
                        Transfer funds, apply for a debit card and get instant
                        notification whenever you spend or receive money, no
                        detail left behind.
                    </p>

                    <button className="default-but">Get Started Now </button>
                </Col>
            </Row>
        </Container>
    );
};
export default Homesection2;

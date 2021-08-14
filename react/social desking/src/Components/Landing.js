import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "../App.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useHistory } from "react-router-dom";

function Landing() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  var handleSubmit = () => {
    window.localStorage.setItem("user", JSON.stringify(email));
    setEmail("");
    let path = `/homepage`;
    history.push(path);
  };
  return (
    <div className="landing ">
      <Row style={{ padding: "5%" }}>
        <Col>
          <h2 style={{ color: "#001bab", fontWeight: "bold" }} className="title">
            dbSpace
          </h2>
        </Col>
        <Col>
          <h4 style={{ textAlign: "right" }}>Bookings | Contact</h4>
        </Col>
      </Row>
      <Row style={{ paddingLeft: "5%", marginTop: "25px" }}>
        <h3
          style={{
            textDecoration: "underline",
            textDecorationColor: "#001bab",
          }}
        >
          Welcome back to office!
        </h3>
      </Row>
      <Row style={{ paddingLeft: "5%", marginTop: "5px" }}>
        <h5 style={{ color: "rgba(0, 0, 0, 0.5)", lineHeight: "1.5em", width: "80%" }}>
          Please sign in to <span style={{ color: "#001bab", fontWeight: "bold" }}>dbSpace</span> with your personal email ID to book your seat in advance and have more productive meetings with your teammates safely.
        </h5>
      </Row>
      <Row style={{ paddingLeft: "5%", marginTop: "25px" }}>
        <Col lg={3}>
          <Form.Control
            type="text"
            placeholder="enter your email address"
            value={email}
            style={{
              color: "rgba(0, 0, 0, 0.5)",
              backgroundColor: "#0018A80D",
              textAlign: "center",
              borderRadius: "5px",
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
      </Row>
      <Row style={{ paddingLeft: "5%", marginTop: "25px" }}>
        <Col>
          <Button
            style={{
              width: "15%",
              color: "#FFF",
              backgroundColor: "#0018A8",
              textAlign: "center",
              borderRadius: "50px",
              height: "40px",
            }}
            onClick={handleSubmit}
          >
            <span style={{ paddingRight: "15px" }}>Proceed</span>
            <ArrowForwardIcon style={{ fill: "white" }} />
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Landing;

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGit,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiNetlify,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>Git</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>Visualstudiocode</p>
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>Postman</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>Netlify</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>Heroku</p>
      </Col>
    </Row>
  );
}

export default Toolstack;

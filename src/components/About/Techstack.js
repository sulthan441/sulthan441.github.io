import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,
  DiBootstrap,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiJava,
} from "react-icons/si";

function Techstack() {
  return (

    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{textDecoration:"underline",marginTop:"20px",marginBottom:"20px"}}>
        Front-end <strong className="purple">technologies</strong>
      </h1>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>React js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>Bootstrap</p>
      </Col> 


      <h1 className="project-heading" style={{textDecoration:"underline",marginTop:"20px",marginBottom:"20px"}}>
        Back-end <strong className="purple">technologies</strong>
      </h1>

      <Col xs={4} md={2} className="tech-icons">
        
        <DiNodejs />
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>Node js</p>

      </Col>


      <Col xs={4} md={2} className="tech-icons">
        

        <p style={{ fontSize: "60px", fontWeight: "bolder"  }}>𝕖𝕩</p>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>Express js</p>


      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>MongoDb</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>Firebase</p>
      </Col>

    </Row>
  );
}

export default Techstack;

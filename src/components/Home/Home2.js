import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillPhone,
  AiFillMessage,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WELCOME <span className="purple"> I AM EXCITED TO SHARE A BIT   </span>ABOUT MYSELF
            </h1>
            <p className="home-about-body">
              I am a Full Stack Web Developer with hands-on experience on both <span  >front-end
                and back-end technologies(MERN).</span>
              <br />
              <br />            I have developed
              various projects by utilizing
              <i>
                <b style={{ color: "#c770f0", fontSize: "19px", fontStyle: "initial", fontWeight: "normal" }}>  HTML, CSS, Javascript, React js , Redux, Express js, Node js, Mongo DB. </b>
              </i>
              <br />
              <br />
              I possess a proven ability to collaborate effectively with my peers.
              <i>
                <b style={{ color: "#c770f0", fontSize: "19px", fontStyle: "initial", fontWeight: "normal" }}>I have a strong work ethic and enjoy working closely with my team members
                  to effectively manage workloads and take on additional responsibilities as needed.
                  <br /> <br /> <span style={{ color: "white", fontSize: "19px", fontStyle: "initial", fontWeight: "lighter" }}> My passion for both personal growth and software development led me to attend
                    a</span> </b> <span style={{ color: "#c770f0", fontSize: "19px", fontStyle: "initial", fontWeight: "normal" }}> 500+ hour coding bootcamp to expand my knowledge of new technologies.</span>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img style={{ borderRadius: "50%", height: "45%" }} src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      
        
      </Container>
    </Container>
  );
}
export default Home2;

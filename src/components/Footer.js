import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillPhone,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} MSD</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          <li className="social-icons">
                <a
                  href="tel:6300537467"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                  // className="icon-colour home-social-icons"
                >
                  <AiFillPhone />
                </a>
              </li>


              <li className="social-icons">
                <a
                  href="mohammedsulthan441@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                  // className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>







            <li className="social-icons">
              <a
                href="https://github.com/sulthan441"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/mohamme17965838?t=iNKyZA3GSGeeQicUlzP8RQ&s=08"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mohammed-sulthan-605121229/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/mohammed_aman_ahmed_11"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

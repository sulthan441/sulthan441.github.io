import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillPhone,
  AiFillMessage,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
    return (

        <Row style={{marginTop:"15%",marginBottom:"14%"}}>
            <Particle/>
            <Col md={12} className="home-about-social">
                <h1 style={{ margin: "20px" }}>CONTACT</h1>
                <p>
                    Feel free to <span className="purple">connect </span>with me
                </p>
                <ul className="home-about-social-links">


                    <li className="social-icons">
                        <a
                            href="tel:6300537467"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                        >
                            <AiFillPhone />
                        </a>
                    </li>


                    <li className="social-icons">
                        <a
                            href="mohammedsulthan441@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                        >
                            <AiFillMail />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/mohammed-sulthan-605121229/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                            <FaLinkedinIn />
                        </a>
                    </li>

                    <li className="social-icons">
                        <a
                            href="https://github.com/sulthan441"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                            <AiFillGithub />

                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://twitter.com/mohamme17965838?t=iNKyZA3GSGeeQicUlzP8RQ&s=08"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                            <AiOutlineTwitter />
                        </a>
                    </li>

                    <li className="social-icons">
                        <a
                            href="https://www.instagram.com/mohammed_aman_ahmed_11"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                        >
                            <AiFillInstagram />
                        </a>
                    </li>
                </ul>
            </Col>
        </Row>
    )
}

export default Contact
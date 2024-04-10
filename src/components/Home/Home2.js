import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { HiOutlineMailOpen } from "react-icons/hi";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I've been passionate about Crafting Clean Code & Building Innovative Solutions. 🚀
              <br />
              <br />I’m currently working on my <b className="purple">Bachelor's Degree in IT Software Engineering.</b> 🔭 
              <br />
              <br />I have hands on experiances with
              <i>
                <b className="purple"> JAVA, Javascript and Python </b>
              </i>
              as well as 
              <i>
                <b className="purple"> Kotlin. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products. </b>
              </i>
              <br />
              <br />
              I always thrilled to work in backend development with <b className="purple">Node.js</b> and 
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Libraries and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/it21219566"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/kulana.thathsara"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3Bv%2BGaY84%2BTcuNy54oRITIPQ%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/KulanaThathsara"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
        <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
          Contact me via Email, {" "}
        </p>
        <Button
            href="mailto:it21219566@my.sliit.lk"
            style={{ maxWidth: "250px", margin: "20px" }}
        >
            <HiOutlineMailOpen />
            &nbsp;Contact me
          </Button>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

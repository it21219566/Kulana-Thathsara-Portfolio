import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kulana Thathsara </span>
            from <span className="purple"> Ambalangoda, Sri Lanka.</span>
            <br />
            I am a Software Engineering Undergraduate at Sri Lanka Institute of Information Technology.
            <br />
            Currently, I am following BSc (Hons) in Information Technology Specialising in Software Engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Read Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Play Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          Passionate about Crafting Clean Code & Building Innovative Solutions 🚀{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

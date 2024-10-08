import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anshul Kumar Singh </span>
            from <span className="purple"> Loughborough, United Kingdom.</span>
            <br />
            I am currently a student in Loughborough University.
            <br />
            I am pursuing my major in MSc in Advanced Computer Science. My main focus is on the field of Artificial Intelligence and web development.
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Meditating
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Anshul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

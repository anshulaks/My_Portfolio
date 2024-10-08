import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bits from "../../Assets/Projects/bit.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with MERN stack and Socket-IO. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/anshulaks/chatapp"
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bits}
              isBlog={false}
              title="SQL-Test-Generator"
              description="My personal blog page built with python on the Streamlit framework which takes in the schema from the user and gives out the questions and solutions accordingly."
              ghLink="https://github.com/anshulaks/SQL"
              // Add inline styling for image size
              imgStyle={{ width: "100%", height: "auto", objectFit: "cover" }} 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Book Store"
              description="Book store Full Stack Web Application using MongoDB, Express Js, ReactJs with UI design using Talwind CSS and NodeJs."
              ghLink="https://github.com/anshulaks/bookStoreApp"
                          
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink=""
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

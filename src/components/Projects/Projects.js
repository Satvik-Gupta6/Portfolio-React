import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/web.png";
import Minecraft from "../../Assets/Projects/mc-plugin.jpg";

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
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="My portfolio website build with Next.js and Bootstrap."
              link="https://github.com/Satvik-Gupta6/Portfolio-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Minecraft}
              isBlog={false}
              title="Particle Plugin"
              description="Minecraft Plugin written in java with help of Spigot API."
              link="https://github.com/Satvik-Gupta6/particles"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bestbuy from "../../Assets/Projects/best-buy homepage.png"
import codepen from "../../Assets/Projects/codepen.png"
import fabAlley from "../../Assets/Projects/faballeyHomepage.png"
import mahabis from "../../Assets/Projects/Mahabiss homepage.png"
import tictactoe from "../../Assets/Projects/tic-tac-toe.png"
import todo from "../../Assets/Projects/todo-home.png"
import myntra from "../../Assets/Projects/myntrahomepage.png"
import dominos from "../../Assets/Projects/dominos.png"







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
              imgPath={fabAlley}
              isBlog={false}
              title="FabAlley"
              description="FabAlley is a fashion brand empowering women with inclusive and trendy western wear, from party dresses to statement accessories."
              techStack="HTML, CSS, Javascript, React js, Redux, Material UI, Firebase"
              ghLink="https://github.com/harshita0802goswami/faballey-clone"
              demoLink="https://faballey-replica.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mahabis}
              isBlog={false}
              title="Mahabis"
              description="Mahabis is a premium e-commerce lifestyle brand that sells slippers and accessories with a natural rubber sole for indoor and outdoor use."
              techStack="HTML,CSS,Javascript,React js, Redux, Material UI, Firebase"
              ghLink="https://github.com/Md-Alqma/mahabis-clone"
              demoLink="https://dreamy-frangipane-645120.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dominos}
              isBlog={false}
              title="Dominos"
              description="Domino's company is known for its fast delivery of freshly made pizzas,pasta, and sandwiches."
              techStack=" HTML, CSS, Javascript, React, Redux, Material UI, express js, Mongo db, Node js"
              ghLink="https://github.com/sulthan441/Dominos"
              demoLink="https://mern-dominos-clone.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="MERN Todo App"
              description="This to-do list app is a digital tool for organizing and managing tasks, allowing users to create, edit, and delete tasks."
              techStack=" HTML, CSS, Javascript, React, Redux, Material UI, express js, Mongo db, Node js"
              ghLink="https://github.com/sulthan441/MERNTodo"
              demoLink="https://mern-todo-mds.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codepen}
              isBlog={false}
              title="Online Code Editor"
              description="The CodePen clone is a platform for developers to showcase their skills, connect with others, and create and share front-end projects conveniently"
              techStack=" HTML, CSS, Javascript, React, Material UI"
              ghLink="https://github.com/sulthan441/CodePen-Clone"
              demoLink="https://codpen-clone-mds.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bestbuy}
              isBlog={false}
              title="Best Buy"
              description="Best Buy is an e-commerce website and electronics retailer selling mobile phones, digital cameras, video games, music, and home appliances."
              techStack=" HTML, CSS, Javascript"
              ghLink="https://github.com/sulthan441/team_BestBuy"
              demoLink="https://mellow-gumption-4caaff.netlify.app/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myntra}
              isBlog={false}
              title="Myntra"
              description="Myntra is a fashion ecom-website where use can buy clothings and accessories. we have created this project for learning purpose"
              techStack=" HTML, CSS, Javascript"
              ghLink="https://github.com/anuragn0507/myntra-clone"
              demoLink="https://myntra-clone-saans.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe"
              description="Tic Tac Toe is a two-player game played on a 3x3 grid board, where players aim to get three of their symbols in a row, horizontally, vertically, or diagonally, resulting in a win or a draw."
              techStack=" HTML, CSS, Javascript, Bootstrap"
              ghLink="https://github.com/sulthan441/Tic-Tac-Toe"
              demoLink="https://tic-tac-toe-game-mds.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

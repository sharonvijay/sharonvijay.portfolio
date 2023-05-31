import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Images from "../assets/img";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Memories Application",
      description:
        "Interactive application where one can save their valuable memories",
      imgUrl: Images.projectImg1,
      githubUrl: "https://github.com/sharonvijay/React-Blog-App",
    },
    {
      title: "Parallax Effect",
      description: "Created Website using ViteJs to demo Parallax Effect",
      imgUrl: Images.projectImg2,
      githubUrl: "https://github.com/sharonvijay/parallax-effect",
    },
    {
      title: "Random Quotes Generator",
      description:
        "Random text generator application which fetches and displays a text from an api",
      imgUrl: Images.projectImg3,
      githubUrl: "https://github.com/sharonvijay/Random-Text-Generator",
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Credit Card Fraud Detection using Logistic Regression",
      imgUrl: Images.projectImg4,
      githubUrl: "https://github.com/sharonvijay/Hackophilia",
    },
    {
      title: "Boston House Price Prediction",
      description: "Data Science Mini Project on Boston House Price Prediction",
      imgUrl: Images.projectImg5,
      githubUrl: "https://github.com/sharonvijay/Boston-House-Price-Prediction",
    },
    {
      title: "Diabetes Prediction",
      description: "Predicting Diabetes with Support Vector Machine Classifier",
      imgUrl: Images.projectImg6,
      githubUrl: "https://github.com/sharonvijay/Predicting-Diabetes",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I made several web projects in Reactjs and even projects in
                    Data Science and Machine Learning.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p></p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third"></Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="backgroundimage"
      ></img>
    </section>
  );
};

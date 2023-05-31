import { Col } from "react-bootstrap";
import { DiGithubBadge } from "react-icons/di";
export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="projectCard" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description} </span>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <br />
            <DiGithubBadge />
            GitHub
          </a>
        </div>
      </div>
    </Col>
  );
};

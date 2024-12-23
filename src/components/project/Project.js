import { NavLink } from "react-router-dom";
import "./style.css";

const Project = ({ title, img, gitHubLink }) => {
  return (
    <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
      <li className="project">
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </li>
    </a>
  );
};

export default Project;

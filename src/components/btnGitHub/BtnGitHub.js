import "./style.css";
import gitIcon from "./../../img/icons/internet.png";

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img className="imggit" src={gitIcon} alt="" />
      Project link
    </a>
  );
};

export default BtnGitHub;

import "./Skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Cloud from "./DatabaseCloud";

export default function Skills() {
  return (
    <div className="skills section" id="skills">
      <h2 className="section__title">Technical Expertise</h2>
      <span className="section__subtitle">End-to-End Full Stack Development Skills</span>

      <div className="skills__container container">
        <Frontend />
        <Backend />
        <Cloud />
      </div>
    </div>
  );
}

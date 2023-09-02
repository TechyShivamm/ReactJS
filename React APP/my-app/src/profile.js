import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./profile.css";

export default function ProfileCart() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="shivam.jpg" alt="Shivam Bhatia" />;
}

function Intro() {
  return (
    <div>
      <h1>Shivam Bhatia</h1>
      <p>
        Full-stack web developer and teacher at Online.I like to play board
        games, to cook (and eat).I love coding
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="lightblue" />
      <Skill skill="HTML+CSS" emoji="💪" color="green" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="BootStrap" emoji="💪" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

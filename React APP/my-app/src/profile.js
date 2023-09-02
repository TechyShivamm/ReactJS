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
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="blue" />
      <Skill skill="JavaScript" emoji="💪" color="blue" />
      <Skill skill="BootStrap" emoji="💪" color="blue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill">
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

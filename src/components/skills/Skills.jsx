import Wrapper from "../wrapper/Wrapper";
import "./skills.scss";

import html from "../../images/skills/html.svg";
import css from "../../images/skills/css.svg";
import scss from "../../images/skills/scss.svg";
import tailwind from "../../images/skills/tailwind.svg";
import figma from "../../images/skills/figma.svg";
import git from "../../images/skills/git.svg";
import js from "../../images/skills/js.svg";
import ts from "../../images/skills/ts.svg";
import react from "../../images/skills/react.svg";
import redux from "../../images/skills/redux.svg";

const Skills = () => {
  const skills = [
    { src: html, name: "HTML 5" },
    { src: css, name: "CSS 3" },
    { src: scss, name: "SCSS" },
    { src: tailwind, name: "Tailwind CSS" },
    { src: figma, name: "Figma" },
    { src: git, name: "Git" },
    { src: js, name: "JavaScript" },
    { src: ts, name: "TypeScript" },
    { src: react, name: "React" },
    { src: redux, name: "Redux" },
  ];

  return (
    <section className="skills">
      <Wrapper>
        <h2 className="skills__title title">Навыки</h2>
        <div className="skills__inner">
          <ul className="skills__items">
            {
              skills.map(({ src, name }) => (
                <li className="skills__item" key={name}>
                  <img src={src} alt={name} />
                  <h4 className="skills__item-title">{name}</h4>
                </li>
              ))
            }
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default Skills
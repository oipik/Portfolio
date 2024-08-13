import "./skills.scss";

import { skills } from "../../data/data";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__title title">Навыки</h2>
      <div className="skills__inner">
        <ul className="skills__items">
          {skills.map(({ src, name }) => (
            <li className="skills__item" key={name}>
              <img src={src} alt={name} />
              <h4 className="skills__item-title">{name}</h4>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;

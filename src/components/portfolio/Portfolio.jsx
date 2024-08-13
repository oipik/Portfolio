import "./portfolio.scss";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import { projects } from "../../data/data";

const Portfolio = () => {
  const [modalActive, setModalActive] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    if (modalActive) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "";
    }
  }, [modalActive]);

  const onClickItem = (value) => {
    setModalActive(true);
    setName(value);
  };

  const project = projects.find((item) => item.name === name);

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio__title title">Портфолио</h2>
      <div className="portfolio__inner">
        <ul className="portfolio__items">
          {projects.map(({ src, name }) => (
            <li
              className="portfolio__item"
              key={name}
              onClick={() => onClickItem(name)}
            >
              <img
                className="portfolio__item-img"
                src={src}
                alt={`Project is ${name}`}
              />
              <p className="portfolio__item-name">{name}</p>
            </li>
          ))}
        </ul>
        <Modal
          active={modalActive}
          setActive={setModalActive}
          project={project}
        />
      </div>
    </section>
  );
};

export default Portfolio;

import Wrapper from "../wrapper/Wrapper";
import "./portfolio.scss";

import movieStore from "../../images/projects/movie-store.png";
import fakeStore from "../../images/projects/fake-store.png";
import portfolio from "../../images/projects/portfolio.png";
import coffeeShop from "../../images/projects/coffee-shop.png";
import axit from "../../images/projects/axit.png";
import wawe from "../../images/projects/wawe.png";
import Modal from "../modal/Modal";
import { useState } from "react";

const Portfolio = () => {
  const [modalActive, setModalActive] = useState(true);

  const projects = [
    { src: movieStore, name: "Movie-store" },
    { src: fakeStore, name: "Fake-store" },
    { src: portfolio, name: "Portfolio" },
    { src: coffeeShop, name: "Coffee-shop" },
    { src: axit, name: "Axit" },
    { src: wawe, name: "Wawe" },
  ];

  const onClickItem = () => {
    console.log("open");
    setModalActive(true);
  };

  return (
    <section className="portfolio" id="portfolio">
      <Wrapper>
        <h2 className="portfolio__title title">Портфолио</h2>
        <div className="portfolio__inner">
          <ul className="portfolio__items">
            {projects.map(({ src, name }) => (
              <li className="portfolio__item" onClick={() => onClickItem()}>
                <img
                  className="portfolio__item-img"
                  src={src}
                  alt={`Project is ${name}`}
                />
                <p className="portfolio__item-name">{name}</p>
              </li>
            ))}
          </ul>
          <Modal active={modalActive} setActive={setModalActive} />
        </div>
      </Wrapper>
    </section>
  );
};

export default Portfolio;

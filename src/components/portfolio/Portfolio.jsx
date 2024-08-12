import Wrapper from '../wrapper/Wrapper';
import './portfolio.scss';
import Modal from '../modal/Modal';
import { useState } from 'react';
import { projects } from '../../data/data';

const Portfolio = () => {
  const [modalActive, setModalActive] = useState(true);

  const onClickItem = () => {
    setModalActive(true);
  };

  return (
    <section className="portfolio" id="portfolio">
      <Wrapper>
        <h2 className="portfolio__title title">Портфолио</h2>
        <div className="portfolio__inner">
          <ul className="portfolio__items">
            {projects.map(({ src, name }) => (
              <li
                className="portfolio__item"
                key={name}
                onClick={() => onClickItem()}
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
          <Modal active={modalActive} setActive={setModalActive} />
        </div>
      </Wrapper>
    </section>
  );
};

export default Portfolio;

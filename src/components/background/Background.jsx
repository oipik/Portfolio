import Wrapper from "../wrapper/Wrapper";
import "./background.scss";

const Background = () => {
  return (
    <section className="background" id="background">
      <Wrapper>
        <h2 className="background__title title">Образование и опыт</h2>
        <div className="background__inner">
          <ul className="background__items">
            <li className="background__item">
              <h3 className="background__item-title">Frontend-разработчик</h3>
              <p>КАМАЗ, ОАО</p>
              <p className="background__item-term">Февраль 2024 - по н.в.</p>
            </li>
            <li className="background__item">
              <h3 className="background__item-title">Инженер-программист</h3>
              <p>Reell Engineering</p>
              <p className="background__item-term">
                2022 - 2024 (1 год 4 месяца)
              </p>
            </li>
          </ul>
          <ul className="background__items">
            <li className="background__item education">
              <h3 className="background__item-title">
                Филиал Казанского (Приволжского) федерального университета,
                <br /> Набережные Челны
              </h3>
              <p>
                Получил образование по специальности "Автоматизация
                технологических процессов и производств"
              </p>
              <p className="background__item-term">2017 - 2022</p>
            </li>
            <li className="background__item education">
              <h3 className="background__item-title">
                Инженерно-экономический колледж, Набережные Челны
              </h3>
              <p>
                Получил образование по специальности "Информационные системы, в
                экономике"
              </p>
              <p className="background__item-term">2011 - 2015</p>
            </li>
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};

export default Background;

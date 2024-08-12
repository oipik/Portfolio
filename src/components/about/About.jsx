import Wrapper from "../wrapper/Wrapper";
import "./about.scss";
import photo from "../../images/photo.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <Wrapper>
        <h2 className="about__title title">Обо мне</h2>
        <div className="about__inner">
          <div className="about__info">
            <ul className="about__info-me">
              <li>
                <strong>Полное имя: </strong>
                Куркин Игорь Геннадьевич
              </li>
              <li>
                <strong>Возраст: </strong>
                29 лет
              </li>
              <li>
                <strong>Город: </strong>
                Набережные Челны
              </li>
              <li>
                <strong>Должность: </strong>
                Junior Frontend-разработчик
              </li>
              <li>
                <strong>Email: </strong>
                <a className="about__link" href="mailto:wazuup.lw@mail.ru">
                  wazuup.lw@mail.ru
                </a>
              </li>
              <li>
                <strong>Telegram: </strong>
                <a
                  className="about__link"
                  href="https://t.me/steel_mountin"
                  target="_blank"
                >
                  @steel_mountin
                </a>
              </li>
              <li>
                <strong>GitHub: </strong>
                <a
                  className="about__link"
                  href="https://github.com/oipik"
                  target="_blank"
                >
                  github.com/oipik
                </a>
              </li>
            </ul>
            <p className="about__descr">
              Здравствуйте меня зовут Куркин Игорь. В веб-разработке более 1
              года. Больше всего мне нравится сам процесс создания приложения.
              Люблю решать интересные задачи, реализовывать необычные идеи в
              интерфейсах. Имею как командный, так и индивидуальный опыт работы.
            </p>
            <p className="about__descr">
              Я очень ценю в людях ответственность, вежливость, надежность,
              готовность прийти на помощь при необходимости.
            </p>
            <p className="about__descr">
              К своим сильным сторонам отношу: ответственность, планирование
              заранее, пунктуальность, готов всегда прийти на помощь.
            </p>
          </div>
          <img className="about__photo" src={photo} alt="photo" />
        </div>
      </Wrapper>
    </section>
  );
};

export default About;

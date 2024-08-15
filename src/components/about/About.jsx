import './about.scss';
import photo from '../../images/photo.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about__title title">Обо мне</h2>
      <div className="about__inner">
        <div className="about__info">
          <ul className="about__info-items">
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
              Frontend-разработчик
            </li>
            <li>
              <strong>Email: </strong>
              <a
                className="about__link"
                rel="noreferrer"
                href="mailto:wazuup.lw@mail.ru"
              >
                wazuup.lw@mail.ru
              </a>
            </li>
            <li>
              <strong>Telegram: </strong>
              <a
                rel="noreferrer"
                className="about__link"
                href="https://t.me/steell_mountain"
                target="_blank"
              >
                @steell_mountain
              </a>
            </li>
            <li>
              <strong>GitHub: </strong>
              <a
                rel="noreferrer"
                className="about__link"
                href="https://github.com/steel-mountain"
                target="_blank"
              >
                github.com/steel-mountain
              </a>
            </li>
            <li>
              <strong>Полное резюме: </strong>
              <a
                className="about__link"
                rel="noreferrer"
                href="https://hh.ru/resume/b2f5b8eeff0cc6ca250039ed1f646f564d7477"
                target="_blank"
              >
                hh.ru/resume
              </a>
            </li>
          </ul>
          <p className="about__descr">
            Здравствуйте меня зовут Куркин Игорь. В веб-разработке более 1.5
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
        <img className="about__photo" src={photo} alt="my avatar" />
      </div>
    </section>
  );
};

export default About;

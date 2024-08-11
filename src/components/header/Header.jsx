import Wrapper from "../wrapper/Wrapper";
import "./header.scss";

const Header = () => {
  const navItem = [
    { item: "Обо мне", href: "#" },
    { item: "Навыки", href: "#" },
    { item: "Опыт", href: "#" },
    { item: "Образование", href: "#" },
    { item: "Портфолио", href: "#" },
    { item: "Связаться со мной", href: "#" },
  ];

  return (
    <section className="header">
      <Wrapper>
        <div className="header__inner">
          <p className="header__logo">Portfolio</p>
          <nav className="nav">
            <ul className="nav__container">
              {
                navItem.map(({ item, href }) => (
                  <li className="nav__item" key={item}>
                    <a href={href} className="nav__link">
                      {item}
                    </a>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      </Wrapper>
    </section>
  )
}

export default Header
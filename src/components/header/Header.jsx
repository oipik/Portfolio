import Wrapper from "../wrapper/Wrapper";
import "./header.scss";

const Header = () => {
  const navItem = [
    { item: "Обо мне", href: "#about" },
    { item: "Навыки", href: "#skills" },
    { item: "Образование и опыт", href: "#background" },
    { item: "Портфолио", href: "#portfolio" },
  ];

  return (
    <header className="header">
      <Wrapper>
        <div className="header__inner">
          <p className="header__logo">Portfolio</p>
          <nav className="nav">
            <ul className="nav__container">
              {navItem.map(({ item, href }) => (
                <li className="nav__item" key={item}>
                  <a href={href} className="nav__link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;

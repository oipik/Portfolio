import { useState } from "react";
import "./header.scss";

import Wrapper from "../wrapper/Wrapper";
import MobileMenu from "../mobileMenu/MobileMenu";
import { navItems } from "../../data/data";

import mobileMenuIcon from "../../images/icon-menu.svg";

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <header className="header">
      <Wrapper>
        <div className="header__inner">
          <p className="header__logo logo">Portfolio</p>
          <nav className="nav">
            <ul className="nav__container">
              {navItems.map(({ item, href }) => (
                <li className="nav__item" key={item}>
                  <a href={href} className="nav__link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div
            onClick={() => setIsMobileMenu(!isMobileMenu)}
            className="header__mobile-menu"
          >
            <img src={mobileMenuIcon} alt="menu" />
          </div>
          <MobileMenu isOpen={isMobileMenu} setIsMobileMenu={setIsMobileMenu} />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;

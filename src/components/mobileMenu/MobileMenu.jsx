import "./mobileMenu.scss";
import { navItems } from "../../data/data";
import closeMenu from "../../images/icon-close-menu.svg";

const MobileMenu = ({ isOpen, setIsMobileMenu }) => {
  return (
    <>
      <div
        className={`mobile__shadow ${isOpen ? "mobile__shadow-active" : ""}`}
        onClick={() => setIsMobileMenu(!isOpen)}
      />
      <div
        className={`mobile__content ${isOpen ? "mobile__content-active" : ""}`}
      >
        <div className="mobile__box">
          <p className="mobile__logo logo">Portfolio</p>
          <img
            className="mobile__box-img"
            onClick={() => setIsMobileMenu(!isOpen)}
            src={closeMenu}
            alt="close menu"
          />
        </div>
        <nav className="mobile">
          <ul className="mobile__items">
            {navItems.map(({ item, href }) => (
              <li className="mobile__item" key={item}>
                <a href={href} className="mobile__link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;

import "./mobileMenu.scss";
import { navItems } from "../../data/data";

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
        <p className="mobile__logo logo">Portfolio</p>
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

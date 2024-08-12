import Wrapper from "../wrapper/Wrapper";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Wrapper>
        <div className="footer__inner">
          <p className="footer__logo">Portfolio</p>
          Copyright 2024 Игорь.
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;

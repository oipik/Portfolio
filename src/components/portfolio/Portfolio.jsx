import Wrapper from "../wrapper/Wrapper";
import "./portfolio.scss";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <Wrapper>
        <h2 className="portfolio__title title">Портфолио</h2>
        <div className="portfolio__inner"></div>
      </Wrapper>
    </section>
  );
};

export default Portfolio;

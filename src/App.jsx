import About from "./components/about/About";
import Background from "./components/background/Background";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Wrapper from "./components/wrapper/Wrapper";

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <About />
        <Skills />
        <Background />
        <Portfolio />
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;

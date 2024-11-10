import "./App.css";
import About from "./components/About";
import Brand from "./components/Brand";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Icons from "./components/Icons";
import TextSlide from "./components/TextSlide";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Brand />
      <Icons/>
      <TextSlide/>
      <Footer/>
    </>
  );
}

export default App;

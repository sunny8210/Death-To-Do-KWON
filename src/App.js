import Navtop from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <div className="App">
      <div className="herobg">
        <Navtop />
        <Hero />
      </div>
      <About/>
      <Tokenomics/>
      <Roadmap/>
      <FAQs/>
      <Footer/>
    </div>
  );
}

export default App;

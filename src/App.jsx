import "./App.scss";
import Cover from "./components/cover/Cover";
import Gallery from "./components/gallery/Gallery";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Destinations from "./components/destinations/Destinations";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Cover />
      <div className="wrapper">
        <section>
          <Destinations />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Contact />
        </section>
        <section>
          <Gallery />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;

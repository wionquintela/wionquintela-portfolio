import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/pagesContent/Navigation";
import Header from "./components/pagesContent/Header";
import Skills from "./components/pagesContent/Skills";
import Projects from "./components/pagesContent/Projects";
import Contacts from "./components/pagesContent/Contacts";
import Footer from "./components/pagesContent/Footer";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Header className="headerSection" />
      <Skills className="contentSection text-center" />
      <Projects className="contentSection text-center" />
      <Contacts className="contentSection" />
      <Footer className="footerSection text-center" />
    </div>
  );
}

export default App;

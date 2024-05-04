import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/pagesContent/Navigation";
import Header from "./components/pagesContent/Header";
import Skills from "./components/pagesContent/Skills";
import Projects from "./components/pagesContent/Projects";
import Contacts from "./components/pagesContent/Contacts";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Header className="headerSection" />
      <Skills className="contentSection text-center" />
      <Projects className="contentSection text-center" />
      <Contacts className="footerSection" />
    </div>
  );
}

export default App;

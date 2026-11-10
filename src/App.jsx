import Navigation from "./components/pagesContent/Navigation";
import Header from "./components/pagesContent/Header.jsx";
import Skills from "./components/pagesContent/Skills.jsx";
import Projects from "./components/pagesContent/Projects.jsx";
import Contacts from "./components/pagesContent/Contacts.jsx";
import Footer from "./components/pagesContent/Footer.jsx";

function App() {
  return (
    <div className="App " data-theme="garden">
      <div className="mx-40">
        {/* <Navigation /> */}
        <Header className="headerSection" />
        <Projects className="contentSection text-center" />
        <Skills className="contentSection text-center" />
        {/* <Contacts className="contentSection" /> */}
        <Footer className="footerSection text-center" />
      </div>
    </div>
  );
}

export default App;

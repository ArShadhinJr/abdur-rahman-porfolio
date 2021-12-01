import './App.css';
import Banner from './Components/Banner/Banner';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;

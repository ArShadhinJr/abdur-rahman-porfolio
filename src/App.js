import './App.css';
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <><div className="App">
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      <a href="#" className="gotop text-white bg-info p-3 border rounded-circle "><i class="fas fa-arrow-up"></i></a>
    </div></>
  );
}

export default App;

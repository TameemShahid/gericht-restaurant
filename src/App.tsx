import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Chef from './components/Chef/Chef';
import FindUs from './components/FindUs/FindUs';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Laurels from './components/Laurels/Laurels';
import Navbar from './components/Navbar/Navbar';
import SpecialMenu from './components/SpecialMenu/SpecialMenu';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

export default App;

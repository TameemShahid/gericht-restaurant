import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import SpecialMenu from './components/SpecialMenu/SpecialMenu';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
    </div>
  );
};

export default App;

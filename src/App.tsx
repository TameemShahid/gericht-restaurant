import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
    </div>
  );
};

export default App;

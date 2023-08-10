import './Header.css';
import { images } from '../../constants';
import SubHeading from '../SubHeading/SubHeading';

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the New Flavor" />
        <h1 className="app__header-h1">The Key to Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          Est ipsum ad cillum consectetur dolore Lorem deserunt ut qui ea sunt
          tempor commodo elit. Sint et irure magna id tempor mollit officia.
          Magna reprehenderit labore ut veniam. Elit est nulla aliqua deserunt
          labore commodo excepteur eu commodo voluptate id laboris sit mollit.
          Pariatur eiusmod et voluptate cupidatat est qui velit nisi velit
          cupidatat culpa.
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="Header" />
      </div>
    </div>
  );
};

export default Header;

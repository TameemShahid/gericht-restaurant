import './FooterOverlay.css';

const FooterOverlay = () => (
  <div className="app__footerOverlay">
    <div
      className="app__footerOverlay-black"
      data-testid="footerOverlay-black"
    />
    <div
      className="app__footerOverlay-img app__bg"
      data-testid="footerOverlay-img"
    />
  </div>
);

export default FooterOverlay;

//Component Imports

//CSS Imports
import "./Footer.css";
import logo from "../images/logoGS.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="brand-culture">
        <div className="brand-box">
          <img
            className="brand"
            src={logo}
            alt="GoldenSolutions Logo"
            width="300"
          />
        </div>
        <div className="quote">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="quicklinks">
        <div className="list">
          <h5 className="links">Quick Links</h5>
          <ul>
            <ol>
              <a href="/">Home</a>
            </ol>
            <ol>
              <a href="/volunteers">Volunteers</a>
            </ol>
            <ol>
              <a href="/seniors">Seniors</a>
            </ol>
            {/* <ol><a>Gallery</a></ol> */}
            {/* <ol><a>Events</a></ol> */}
            {/* <ol><a>Support</a></ol> */}
            <ol>
              <a href="/our-team">Our Team</a>
            </ol>
          </ul>
        </div>
      </div>
      <div className="contact">
        <h5>Contact Us</h5>
        <p>123 Anywhere St., Any City, ST 12345</p>
        <p>hello@reallygreatsite.com</p>
        <p>+123-456-7890</p>
      </div>
    </div>
  );
};

export default Footer;

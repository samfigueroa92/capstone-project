import './Footer.css'
import logo from "../images/logoGS.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className = 'brand-culture'>
            <div className="brand-box">
            {/* <h4>GoldenSolutions</h4> */}
            <img  className='brand'src={logo} alt="GoldenSolutions Logo" width="300"/>
            </div>
            <div className="quote">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
            <div className="quicklinks">
                <h5 className = 'links'>Quick Links</h5>
                <div className='list'>
                <ul>
                <ol><a>Home</a></ol>
                <ol><a>Volunteers</a></ol>
                <ol><a>Seniors</a></ol>
                <ol><a>Gallery</a></ol>
                <ol><a>Events</a></ol>
                <ol><a>Support</a></ol>
                <ol><a>Info</a></ol>
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
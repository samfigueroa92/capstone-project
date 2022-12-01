//CSS Imports
import './Footer.css';
// import logo from "../images/logoGS.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className = 'brand-culture'>
            <div className="brand-box">
            <img  className='brand'src="/images/logoGS.png" alt="GoldenSolutions Logo" width="300"/>
            </div>
            <div className="quote">
                <p><em>"All the beautiful sentiments in the world weigh less than a single lovely action."</em> - James Russell Lowell</p>
            </div>
            </div>
            <div className="quicklinks">
                <div className='lists'>
                <h5 className = 'links'>Quick Links</h5>
                <ul className = 'list'>
                <ol><a href="/">Home</a></ol>
                <ol><a href="/volunteers">Volunteers</a></ol>
                <ol><a href="/seniors">Seniors</a></ol>
                <ol><a href="/our-team">Our Team</a></ol>
                </ul>
                </div>
            </div>
            <div className="contact">
                <h5>Contact Us</h5>
                <p>123 Anywhere St., Any City, ST 12345</p>
                <p>support@goldensolutions.com</p>
                <p>+123-456-7890</p>
            </div>
        </div>
    );
};

export default Footer;
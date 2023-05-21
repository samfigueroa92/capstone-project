//CSS Imports
import './Footer.css';

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
                <ol><a href="/our-team">Our Team</a></ol>
                </ul>
                </div>
            </div>
            <div className="contact">
                <h5>Contact Us</h5>
                <div>123 Anywhere St., Any City, ST 12345</div>
                <div>support@goldensolutions.com</div>
                <div>+123-456-7890</div>
            </div>
        </div>
    );
};

export default Footer;
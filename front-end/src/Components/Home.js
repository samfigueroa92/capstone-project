//Component Imports
import Footer from "./Footer";
import Testimonials from "./Testimonials";

//CSS Imports
import "./Home.css";
//BOOTSTRAP
import Button from "react-bootstrap/Button";

const Home = ({ setModalOpen }) => {
  return (
    <div>
      <div className="home">
        <div className="info">
          <div>
            <h1>How it works...</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate
              ligula in accumsan accumsan. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate
              ligula in accumsan accumsan. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate
              ligula in accumsan accumsan. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </div>
          <Button onClick={() => setModalOpen(true)}>SIGN UP NOW</Button>
        </div>
        <div className="gallery">
          <img
            className="big-image"
            src="https://www.lifeopedia.com/wp-content/uploads/2016/05/iStock_000069165823_Large.jpg"
            alt="Computer Help"
          />
          <img
            className="image1"
            src="https://sdscf.org/wp-content/uploads/2019/03/shutterstock_288532283.jpg"
            alt="Groceries"
          />
          <img
            className="image2"
            src="https://www.communityplace.org/wp-content/uploads/2021/12/group-of-retired-seniors-painting.jpg"
            alt="Painting"
          />
          <img
            className="image3"
            src="https://aginginplace.org/wp-content/uploads/Group-of-people-planting-vegetable.jpg"
            alt="Planting"
          />
        </div>
        <div className="blurbs">
          <section className="support">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1189/1189206.png"
              alt="support-icon"
            />
            <h4>Support</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </section>
          <section className="community">
            <img
              src="https://icons.veryicon.com/png/o/business/classic-icon/community-12.png"
              alt="community-icon"
            />
            <h4>Community</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </section>
          <section className="safety">
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/3vjia-icon-line/safety-guarantee-3.png"
              alt="safety-icon"
            />
            <h4>Safety Guaranteed</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </section>
        </div>
        <div className="bottom-banner">
          <h1>Get help from local volunteers!</h1>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;

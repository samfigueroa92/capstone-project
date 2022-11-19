import "./Home.css";

//BOOTSTRAP
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div className="home">
      <div className="info">
        <div>
        <h1>How it works...</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
          ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate ligula
          in accumsan accumsan. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
          ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate ligula
          in accumsan accumsan. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
          ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate ligula
          in accumsan accumsan. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos.
        </p>
        </div>
        <Button>SIGN UP NOW</Button>
      </div>
      <div className="gallery">
        <p className="big-image">this is the larger image</p>
        <p className="image1">this is small img 1</p>
        <p className="image2">this is small img 2</p>
        <p className="image3">this is small img 3</p>
          {/* <img className="big-image" src="https://www.lifeopedia.com/wp-content/uploads/2016/05/iStock_000069165823_Large.jpg" />
          <img className="image1" src="https://sdscf.org/wp-content/uploads/2019/03/shutterstock_288532283.jpg" />
          <img className="image2" src="https://www.communityplace.org/wp-content/uploads/2021/12/group-of-retired-seniors-painting.jpg" />
          <img className="image3" src="https://static1.bigstockphoto.com/9/3/2/large1500/239643796.jpg" /> */}
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
  );
};

export default Home;

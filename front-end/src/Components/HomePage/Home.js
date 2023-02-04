//DEPENDENCIES
import { useNavigate } from "react-router-dom";

//COMPONENTS
import Testimonials from "./Testimonials";

//CSS
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="HomePage">
      <div className="HomePage_landing_container">
        <div className="HomePage_landing_text">
          Get help from local volunteers!
        </div>
        <input type="submit" value="SIGN UP TODAY" onClick={() => navigate("/sign-up")} />
      </div>
      <div className="HomePage_info">
          <h1>How does it work?</h1>
          <p>
          Getting older is a normal part of life with it's up's and down's. You may find as you get older that some
          basic, everday tasks may be too difficult to do alone.
          <br />
          <br />
          GoldenSolutions aims to relieve some of the stress and
          anxiety of these situations by connecting seniors, who need an extra
          hand with everyday tasks, with local, friendly volunteers who are
          willing and able to lend their time and skills.
          <br />
          <br />
          <div className="HomePage_info_columns">
          Sign up as a <span>Senior</span> today and start getting help by submitting requests from your easy to use dashboard.
          <br />
          <br />
          As a <span>Volunteer</span>, you get points for every request completed. The more you help the more benefits you recieve! 
          </div>
          </p>
      </div>
      <div className="HomePage_blurbs">
        <section>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1189/1189206.png"
            alt="support-icon"
          />
          <h4>Support</h4>
          <p>Everyone needs a little help sometimes!</p>
        </section>
        <section >
          <img
            src="https://icons.veryicon.com/png/o/business/classic-icon/community-12.png"
            alt="community-icon"
          />
          <h4>Community</h4>
          <p>Get to know new people or help old friends!</p>
        </section>
        <section>
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/3vjia-icon-line/safety-guarantee-3.png"
            alt="safety-icon"
          />
          <h4>Safety Guaranteed</h4>
          <p>All users are checked and verified!</p>
        </section>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;

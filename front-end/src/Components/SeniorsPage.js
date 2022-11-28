//Component Imports
import Footer from "./Footer";

//CSS Imports
import "./SeniorsPage.css";
//BOOTSTRAP
import Button from "react-bootstrap/Button";

const SeniorsPage = ({setModalOpen}) => {

  return (
    <div>
    <div className="senior-page">
      <div className='senior-paragraph'>
      <h2 className ='seniors'>Seniors</h2>
      <div>
        <h5><b>How does it work?</b></h5>
        <p>
          As a company we value all our clients and volunteers safety because of this we require a background check. Once verified both clients and volunteers has access to their personal dashboard. When in need of additional support, the dashboard is available to request assistance using the request form. When accepted you will receive an notification of who will be assisting you. Once the service has been provided you can then rate your volunteer and even create your own favorite list.
        </p>
      </div>
      <div>
        <h5><b>How do I apply?</b></h5>
        <p>
          All you have to do is click the signup button down below, sign up with your google email and complete the form ... and don't forget to hit the submit button down below.
        </p>
      </div>
      <div>
        <h5><b>What are the benefits?</b></h5>
        <p>
          As a client you're able to met new people within your neighborhood as well as receive additional support in your daily life. Whether it is help grocery shopping, electronic help, or even just someone to accompany you to the park. Golden Solution is here to help in your daily life and so are our volunteers.
        </p>
      </div>
      <Button className='button' onClick={() => setModalOpen(true)}>SIGN UP NOW</Button>
      </div>
      <img src="https://us.123rf.com/450wm/rumkavodki/rumkavodki2010/rumkavodki201000254/158148260-woman-helping-to-elderly-lady-with-shopping-cartoon-characters-of-volunteer-and-old-woman-at-decorat.jpg?ver=6" />
    </div>
      <Footer />
    </div>
  );
};

export default SeniorsPage;

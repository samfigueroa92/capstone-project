//Component Imports
import Footer from "./Footer";

//CSS Imports
import "./VolunteerPage.css";

//BOOTSTRAP
import Button from "react-bootstrap/Button";

const VolunteerPage = ({setModalOpen}) => {

  return (
    <div>
    <div className="volunteer-page">
      <div className ='volunteer-paragraph'>
      <h2 className='volunteers'>Volunteers</h2>
      <div>
        <h5>What does a volunteer do?</h5>
        <p>
          Growing up we are told to expand our friend circle and get to know people of all ages. As a volunteer you have access to older friends. A volunteer is able to accept jobs within their dashboard and ....
        </p>
      </div>
      <div>
        <h5>How do I apply?</h5>
        <p>
         As an organization we take our clients and our volunteers safety seriously. To become a volunteer just click the signup button below. Once you have completed the sign-up form and you have been verified your dashboard will be available. Accepting senior support is simple just click accept and arrive to the location to support your new neighbor.
        </p>
      </div>
      <div>
        <h5>What are the benefits?</h5>
        <p>
          We all love doing good deeds we are able to see the smile on another persons face. And if that's not enough we have incentivized volunteering. Monthly our volunteer receive a thank you gift from us, Golden Solutions. We appreciate all of your support as we support our elderly clients one volunteer at a time. 
        </p>
      </div>
      <Button className='button' onClick={() => setModalOpen(true)}>SIGN UP NOW</Button>
      </div>
      <img className ='volunteer-image'src="https://static.vecteezy.com/system/resources/previews/006/795/116/original/volunteer-man-walking-in-park-with-elderly-disabled-or-handicapped-woman-in-wheelchair-help-and-support-to-senior-people-with-health-problems-banner-for-5th-december-cartoon-illustration-vector.jpg" />
    </div>
      <Footer/>
    </div>
  );
};

export default VolunteerPage;

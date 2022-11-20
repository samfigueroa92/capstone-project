import "./VolunteerPage.css";
import Footer from "./Footer";

//BOOTSTRAP
import Button from "react-bootstrap/Button";

const VolunteerPage = () => {
  return (
    <div className="volunteer-page">
      <div className ='volunteer-paragraph'>
      <h2 className='volunteers'>Volunteers</h2>
      <div>
        <h5>What does a volunteer do?</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
          ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate ligula
          in accumsan accumsan. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos.
        </p>
      </div>
      <div>
        <h5>How do I apply?</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
          ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate ligula
          in accumsan accumsan. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos.
        </p>
      </div>
      <div>
        <h5>What are the benefits?</h5>
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
          ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate ligula
          in accumsan accumsan. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos.
        </p>
      </div>
      <Button className='button'>SIGN UP NOW</Button>
      </div>
      <img className ='volunteer-image'src="https://static.vecteezy.com/system/resources/previews/006/795/116/original/volunteer-man-walking-in-park-with-elderly-disabled-or-handicapped-woman-in-wheelchair-help-and-support-to-senior-people-with-health-problems-banner-for-5th-december-cartoon-illustration-vector.jpg" />
      <Footer/>
    </div>
  );
};

export default VolunteerPage;

//Component Imports
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

//CSS Imports
import "./VolunteerPage.css";

//BOOTSTRAP
import Button from "react-bootstrap/Button";

const VolunteerPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="volunteer-page">
        <div className="volunteer-paragraph">
          <h2 className="volunteers">Volunteers</h2>
          <div>
            <h5>What does a volunteer do?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate
              ligula in accumsan accumsan. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </div>
          <div>
            <h5>How do I apply?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate
              ligula in accumsan accumsan. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </div>
          <div>
            <h5>What are the benefits?</h5>
            <p>
              orem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate
              ligula in accumsan accumsan. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </div>
          <Button className="button" onClick={() => setModalOpen(true)}>
            SIGN UP NOW
          </Button>
        </div>
        <img
          className="volunteer-image"
          src="https://static.vecteezy.com/system/resources/previews/006/795/116/original/volunteer-man-walking-in-park-with-elderly-disabled-or-handicapped-woman-in-wheelchair-help-and-support-to-senior-people-with-health-problems-banner-for-5th-december-cartoon-illustration-vector.jpg"
        />
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
      <Button className='button' onClick={() => navigate("/sign-up")}>SIGN UP NOW</Button>
      </div>
      <img className ='volunteer-image'src="https://static.vecteezy.com/system/resources/previews/006/795/116/original/volunteer-man-walking-in-park-with-elderly-disabled-or-handicapped-woman-in-wheelchair-help-and-support-to-senior-people-with-health-problems-banner-for-5th-december-cartoon-illustration-vector.jpg" />
    </div>
      <Footer/>
    </div>
  );
};

export default VolunteerPage;

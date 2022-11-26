//Component Imports
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

//CSS Imports
import "./SeniorsPage.css";
//BOOTSTRAP
import Button from "react-bootstrap/Button";

const SeniorsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="senior-page">
          <div className="senior-paragraph">
            <h2 className="seniors">Seniors</h2>
            <div>
              <h5>
                <b>How does it work?</b>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                sed ipsum at urna tincidunt pharetra ut a turpis. Vivamus
                vulputate ligula in accumsan accumsan. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos.
              </p>
            </div>
            <div>
              <h5>
                <b>How do I apply?</b>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                sed ipsum at urna tincidunt pharetra ut a turpis. Vivamus
                vulputate ligula in accumsan accumsan. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos.
              </p>
            </div>
            <div>
              <h5>
                <b>What are the benefits?</b>
              </h5>
              <p>
                orem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                sed ipsum at urna tincidunt pharetra ut a turpis. Vivamus
                vulputate ligula in accumsan accumsan. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos.
              </p>
            </div>
            {/* <Button className="button" onClick={() => setModalOpen(true)}>
            SIGN UP NOW
          </Button> */}
          </div>
          <img
            src="https://us.123rf.com/450wm/rumkavodki/rumkavodki2010/rumkavodki201000254/158148260-woman-helping-to-elderly-lady-with-shopping-cartoon-characters-of-volunteer-and-old-woman-at-decorat.jpg?ver=6"
            alt="helpin too"
          />
        </div>
        <Button className="button" onClick={() => navigate("/sign-up")}>
          SIGN UP NOW
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default SeniorsPage;

import "./SeniorsPage.css";
import Footer from "./Footer";

//BOOTSTRAP
import Button from "react-bootstrap/Button";

const SeniorsPage = () => {
  return (
    <div className="senior-page">
      <h2>Seniors</h2>
      <div>
        <h5>How does it work?</h5>
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
      <Button>SIGN UP NOW</Button>
      <img src="https://us.123rf.com/450wm/rumkavodki/rumkavodki2010/rumkavodki201000254/158148260-woman-helping-to-elderly-lady-with-shopping-cartoon-characters-of-volunteer-and-old-woman-at-decorat.jpg?ver=6" />
      <Footer />
    </div>
  );
};

export default SeniorsPage;

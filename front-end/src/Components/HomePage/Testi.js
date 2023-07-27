import React from "react";
import "./Testi.css";
import NewCardData from "./NewCardData";

const Testi = () => {
  return (
    <div className="testi-cards">
        <h1 className="testi__heading">TESTIMONIALS</h1>
      <div className="new-card-holder">
        <div className="new-card-wrap">
          <div className="new-cards-items">
            <NewCardData
              src="images/mela2.jpeg"
              text= "I live in NYC alone so I am glad that this website exists and I can get the help I need quickly. I've received so much help from amazing volunteers and plan on continuing to use this website."
              label="Mela Stack"
              path="#"
            />
            <NewCardData
              src="images/finn2.jpeg"
              text="When I first heard about this site it reminded me of my grandfather who I loved helping out when I was younger. So I love being able to offer my help to others. We all get older someday!"
              label="Finn Styles"
              path="#"
            />
            </div>
            <div className="new-cards-items">
            <NewCardData
              src="images/elderly1.jpeg"
              text="Before I found this easy to use website, I was struggling. I don't have much family or friends around but thanks to GoldenSolutions I have a new family, their army of friendly volunteers."
              label="Melvin Rabinowitz"
              path="#"
            />
            <NewCardData
              src="images/newVol1.jpeg"
              text="I love helping people so whenever I have free time, I login to the site and try to pick up a task. I try to do a task everyday since I know I am helping seniors who really need it. It's the best part of my day!"
              label="Bailey Cruz"
              path="#"
            /> 
            <NewCardData
              src="images/adams.jpeg"
              text="I live in NYC alone so I am glad that this website exists and I can get the help I need quickly. I've received so much help from amazing volunteers and plan on continuing to use this website."
              label="Abu Adams"
              path="#"
            /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testi;

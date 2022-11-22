import "./OurTeam.css";
import Footer from "./Footer";
import teamwork from '../images/teamwork.jpg'
import React, { useState } from "react";

const OurTeam = () => {
  const [learnMore, setLearnMore] = useState({
    sam: false,
    tom: false,
    kalilah: false,
    adnan: false,
    gigi: false,
    tim: false,
  });

  const STAFFBIOS = {
    sam: "sam, orem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate ligula in accumsan accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    tom: "tom, orem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate ligula in accumsan accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    kalilah:
      "kalilah, orem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate ligula in accumsan accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    adnan:
      "adnan, orem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate ligula in accumsan accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    gigi: "gigi,orem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate ligula in accumsan accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    tim: "tim,orem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate ligula in accumsan accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  };

  const handleLearnMore = (teamMate) => {
    return learnMore[teamMate] ? (
      <>
        {STAFFBIOS[teamMate]}
        <div
          onClick={() =>
            setLearnMore({ ...learnMore, [teamMate]: !learnMore[teamMate] })
          }
        >
         <p className='underline'>View Less</p>
        </div>
      </>
    ) : (
      <div
        onClick={() =>
          setLearnMore({ ...learnMore, [teamMate]: !learnMore[teamMate] })
        }
      >
        <p className='underline'>Learn More</p>
      </div>
    );
  };

  return (
    <div>
      <div className = "teamwork">
      <div>{"Our Team"}</div>
      <div>{ "Supporting Our Community"}</div>
      <div>{"One Volunteer at a Time"}</div> 
      </div>
      <div className = 'quote'>
      <div>"{"As you grow older, you will discover that you have two hands —"}</div>
      <div>{"one for helping yourself, the other for helping others."}"</div> 
      <div>{"— Audrey Hepburn"}</div>
      </div>
      <div className = 'our-team'>
        <div className= 'team'>
          <img
            className="our-team-img"
            src="https://ca.slack-edge.com/TCVA3PF24-U02LP2TBD8D-66655ad951d8-512"
            alt="Samantha Figueroa"
          />
          <h5 className='name'> Samantha Figueroa</h5>
          <h5 className='position'> President of Engineering</h5>
          {handleLearnMore('sam')}
        </div>
        <div className= 'team'>
          <img
            className="our-team-img"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEUYyUqQXTZpQ/profile-displayphoto-shrink_800_800/0/1643244593566?e=1674691200&v=beta&t=mzXtv0JVf8sXvpzSPlT1YW-8aBDkFReJNLP3y6hxtNE"
            alt="Tom LaTulipe"
          />
          <h5 className ='name'>Tom LaTulipe</h5>
          <h5 className='position'> VP of Engineering</h5>
          {handleLearnMore('tom')}
        </div>
        <div className= 'team'>
          <img
            className="our-team-img"
            src="https://media-exp1.licdn.com/dms/image/C5603AQFIoVA0ltC1Fg/profile-displayphoto-shrink_800_800/0/1592177861401?e=1674086400&v=beta&t=gGt0ISX9GlFHHDdsgcf4t97d5fpQs00mMEcWSSwQoV8"
            alt="Kalilah Clarke"
          />
          <h5 className='name'>Kalilah Clarke</h5>
          <h5 className='position'>Director of Engineering - User Facing Technologies</h5>
          {handleLearnMore('kalilah')}
        </div>
        <div className= 'team'>
          <img
            className="our-team-img"
            src="https://ca.slack-edge.com/TCVA3PF24-U02LBBUQM39-804e6eb0aa9f-512"
            alt="Adnan Abubakar Adams"
          />
          <h5 className='name'>Adnan Abubakar Adams</h5>
          <h5 className='position'>Senior Principal Engineer</h5>
          {handleLearnMore('adnan')}
        </div>
        <div className= 'team'>
        <a href="https://www.gigiscarborough.com">
          <img
            className="our-team-img"
            src="https://ca.slack-edge.com/TCVA3PF24-U022L8PJX8B-edc76878813b-192"
            alt="Gigi Scarsborough"
          />
          </a>
          <h5 className='name'>Gigi Scarborough</h5>
          <h5 className='position'>Chief Technology Officer</h5>
          {handleLearnMore('gigi')}
        </div>
        <div className= 'team'>
         <a href = "https://mckiernantim.github.io/">
          <img
            className="our-team-img"
            src="https://ca.slack-edge.com/TCVA3PF24-U022H04SBPF-6e9b68170b60-512"
            alt="Tim McKiernan"
          />
         </a>
          <h5 className='name'>Tim McKiernan</h5>
          <h5 className='position'>Chief Innovation Officer</h5>
          {handleLearnMore('tim')}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurTeam;

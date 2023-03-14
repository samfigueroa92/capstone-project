//DEPENDENCIES
import { useState } from "react";

//CSS
import "./OurTeam.css";

const OurTeam = () => {
  const [team, setTeam] = useState([
    "samantha",
  ]);
  const [learnMore, setLearnMore] = useState({
    sam: false,
  });

  const STAFFBIOS = {
    sam: "Currently I work as the Adminstrative Associate for World Day of Prayer International. While redesigning their website I realized I had an interest in and enjoyed web development. After being referred to Pursuit by a friend, I decided it was time to bring my passion for helping others and interest in building useful and innovative websites into the world of tech. The idea for GoldenSolutions came out of my desire to help my elderly grandmother every time she called me to tell me about something she wanted to get done and couldn't manage to do alone. Unfortunately, with her living in Puerto Rico and me in New York, there wasn't much I could do. ",
  };

  const handleLearnMore = (teamMate) => {
    return learnMore[teamMate] ? (
      <>
        <p className="bio">{STAFFBIOS[teamMate]}</p>
        <div
          onClick={() =>
            setLearnMore({ ...learnMore, [teamMate]: !learnMore[teamMate] })
          }
        >
          <button className="underline">View Less</button>
        </div>
      </>
    ) : (
      <div
        onClick={() =>
          setLearnMore({ ...learnMore, [teamMate]: !learnMore[teamMate] })
        }
      >
        <button className="underline">Learn More</button>
      </div>
    );
  };

  return (
    <div>
      <div className="teamwork">
        <div>Our Team</div>
        <div>Supporting Our Community</div>
        <div>One Volunteer at a Time</div>
      </div>
      <div className="quotes">
        <div>
          "{"As you grow older, you will discover that you have two hands —"}
        </div>
        <div>{"one for helping yourself, the other for helping others."}"</div>
        <div>{"— Audrey Hepburn"}</div>
      </div>
      <div className="our-team">
        <div className="team">
          <a href={`/our-page/${team[0]}`}>
            <img
              className="our-team-img"
              src="https://ca.slack-edge.com/TCVA3PF24-U02LP2TBD8D-66655ad951d8-512"
              alt="Samantha Figueroa"
            />
          </a>
          <p className="name"> Samantha Figueroa</p>
          <p className="position">Full-stack Web Developer</p>
          {handleLearnMore("sam")}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

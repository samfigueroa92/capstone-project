//Dependencies
import React, { useState } from "react";

//Components Import
import Footer from "./Footer";

//CSS Imports
import "./OurTeam.css";

const OurTeam = () => {
  const [team, setTeam] = useState([
    "samantha",
    "tom",
    "kalilah",
    "adnan",
    "sabrina",
    "gigi",
    "tim",
    "amber",
  ]);
  const [learnMore, setLearnMore] = useState({
    sam: false,
    tom: false,
    kalilah: false,
    adnan: false,
    sabrina: false,
    gigi: false,
    tim: false,
    amber: false,
  });

  const STAFFBIOS = {
    sam: "I am the Administrative & Communications Associate at World Day of Prayer International during the day and a full-stack web developer by night. As a Pursuit fellow I have developed my coding skills in Javascript, React, HTML, CSS, Express and PostgreSQL as well as my interpersonal skils as a team player and leader. I am passionate about helping others and aspire to be part of a company that holds the same values. When I am not working or coding I like to relax by playing video games or practicing some rollerskating moves.",
    tom: "Tom, orem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate ligula in accumsan accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    kalilah:
      "Kalilah, My name is Kalilah Clarke. In school my favorite subject was Mathematics because I loved problem solving, I viewed math as a puzzle. I began my career as a Full-Stack Developer because of an Alumni Fellow who recognized those same qualities in web-development. I currently work as an Educator and Supervisor training others to optimally support and communicate with Middle School students  and though I love it, Pursuit has broken the ceiling as I pursue self development.",
    adnan:
      "Adnan, orem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate ligula in accumsan accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    sabrina:
      "I am currently a Profesional Services Provider at the Mexican Consulate in New York and also I am studying Web Development at pursuit. Before I joined pursuit. I studied Computer Science in Mexico where I learned how to code in Java and Mysql. After I finished collage , I came to USA and I started my journey at pursuit. I feel really happy for that desicion because now I know how to code in JavaScript , HTML, CSS and Postgres. When I am not coding, I like to read the newspaper and go to the park with my daughter. My biggest dream is to become a Web Developer and work for a big company where I can put in practice my skills and gain more expierence.",
    gigi: "Gigi,orem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate ligula in accumsan accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    tim: "Tim,orem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate ligula in accumsan accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    amber:
      "Amber,orem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate ligula in accumsan accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
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
        <div>{"Our Team"}</div>
        <div>{"Supporting Our Community"}</div>
        <div>{"One Volunteer at a Time"}</div>
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
          <p className="position"> President of Engineering</p>
          {handleLearnMore("sam")}
        </div>
        <div className="team">
          <a href={`/our-page/${team[1]}`}>
            <img
              className="our-team-img"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQEUYyUqQXTZpQ/profile-displayphoto-shrink_800_800/0/1643244593566?e=1674691200&v=beta&t=mzXtv0JVf8sXvpzSPlT1YW-8aBDkFReJNLP3y6hxtNE"
              alt="Tom LaTulipe"
            />
          </a>
          <p className="name">Tom LaTulipe</p>
          <p className="position"> VP of Engineering</p>
          {handleLearnMore("tom")}
        </div>
        <div className="team">
        <a href={`/our-page/${team[2]}`}>
          <img
            className="our-team-img"
            src="https://media-exp1.licdn.com/dms/image/C5603AQFIoVA0ltC1Fg/profile-displayphoto-shrink_800_800/0/1592177861401?e=1674086400&v=beta&t=gGt0ISX9GlFHHDdsgcf4t97d5fpQs00mMEcWSSwQoV8"
            alt="Kalilah Clarke"
          />
          </a>
          <p className="name">Kalilah Clarke</p>
          <p className="position">
            Director of Engineering-User Facing Technologies
          </p>
          {handleLearnMore("kalilah")}
        </div>
        <div className="team">
          <a href={`/our-page/${team[3]}`}>
          <img
            className="our-team-img"
            src="https://ca.slack-edge.com/TCVA3PF24-U02LBBUQM39-804e6eb0aa9f-512"
            alt="Adnan Abubakar Adams"
            />
            </a>
          <p className="name">Adnan Abubakar Adams</p>
          <p className="position">Senior Principal Engineer</p>
          {handleLearnMore("adnan")}
        </div>
        <div className="team">
        <a href={`/our-page/${team[4]}`}>
          <img
            className="our-team-img"
            src="https://ca.slack-edge.com/TCVA3PF24-U02M4L7LAV7-07a20f756bae-512"
            alt="Sabrina"
          />
          </a>
          <p className="name">Sabrina Escobar Flores</p>
          <p className="position">Mobile/Tablet Front-End Developer</p>
          {handleLearnMore("sabrina")}
        </div>
        <div className="team">
          <a href={`/our-page/${team[5]}`}>
            <img
              className="our-team-img"
              src="https://ca.slack-edge.com/TCVA3PF24-U022L8PJX8B-edc76878813b-192"
              alt="Gigi Scarsborough"
            />
          </a>
          <p className="name">Gigi Scarborough</p>
          <p className="position">Chief Technology Officer</p>
          {handleLearnMore("gigi")}
        </div>
        <div className="team">
          <a href={`/our-page/${team[6]}`}>
            <img
              className="our-team-img"
              src="https://ca.slack-edge.com/TCVA3PF24-U022H04SBPF-6e9b68170b60-512"
              alt="Tim McKiernan"
            />
          </a>
          <p className="name">Tim McKiernan</p>
          <p className="position">Chief Innovation Officer</p>
          {handleLearnMore("tim")}
        </div>
        <div className="team">
          <a href={`/our-page/${team[7]}`}>
            <img
              className="our-team-img"
              src="https://ca.slack-edge.com/TCVA3PF24-U04CMRUKB6U-8ad816fd1907-512"
              alt="Amber Bennet"
            />
          </a>
          <p className="name">Amber Bennet</p>
          <p className="position">Technical Consultant</p>
          {handleLearnMore("amber")}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurTeam;

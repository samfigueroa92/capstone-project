//DEPENDENCIES
import { useState } from "react";

//CSS
import "./OurTeam.css";

const OurTeam = () => {
  const [team, setTeam] = useState(["samantha"]);
  const [learnMore, setLearnMore] = useState({
    sam: false,
  });

  const STAFFBIOS = {
    sam: "For the past 7 years I have been the Administrative & Communications Associate for a small non profit called World Day of Prayer International. One of my very first tasks with them was to remodel their website and at that time I had no real coding experience but I still tried my best. I looked through the files, researched the code, and was able to manipulate some of the HTML and CSS for minor things, changing a background color for example. Unfortunately, I was not able to devote too much time to learning how to edit the code so we went with a simple click and drag. However, I really enjoyed doing it and it reminded me of when I was younger and spent most of my time on my computer customizing my Myspace page. That was probably my first experience with any kind of coding and it has always been fun and interesting to me. My mother would always suggest studying computer science but I had a lot of self doubt at that age and would usually quit something before starting because I didn’t think I would be good at it. So when a friend referred me to the Pursuit fellowship I felt like it was a second chance to try web development. I applied, got accepted and completed my intense year long fellowship in December 2023. I gained experience in React, Javascript, HTML, CSS for front-end development, as well as Express.js and PostgreSQL for back-end development. I am excited to keep developing the skills I learned during this fellowship and bring my contributions to the tech community!",
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
        <div className="about_gs">
          <div className="about_gs_subheader">About GoldenSolutions: this is a test</div>
          <div className="about_gs_text">
            GoldenSolutions is a passion project that I started during my
            Pursuit fellowship and continue to work on. The idea to build a
            help-request style website came from my desire to help my elderly
            grandmother who lives in Puerto Rico alone and has difficulties with
            daily tasks. Unfortunately, I live in New York and cannot easily
            help her and always wondered if there was a website where I could
            hire someone or request a volunteer to help. That's when I decided
            to try and build it myself with my new skills.
          </div>
          <div className="about_gs_subheader">Languages/Frameworks used</div>
          <div className="about_gs_list">
            <div>
              <p>Front-end</p>
              <ul>
                <li>React</li>
                <li>Javascript</li>
                <li>React Bootstrap</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
            </div>
            <div>
              <p>Back-end</p>
              <ul>
                <li>Express.js</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div>
              <p>Other</p>
              <ul>
                <li>Firebase</li>
                <li>Various NPM packages</li>
                <li>Netlify</li>
                <li>Render</li>
                <li>ElephantSQL</li>
              </ul>
            </div>
          </div>
          <div className="about_gs_contact">
            <h2 className="about_gs_contact-header">Contact Form</h2>
            <form
              className="about_gs_contact-form"
            >
              <p>
                Interested in working with me or just want to say hello? Don't
                hesitate to send a message!
              </p>
              <label>
                Subject:
                <input type="text" name="subject" />
              </label>
              <label>
                Name:
                <input type="text" name="name" align="left" required />
              </label>
              <label>
                Your Email:
                <input
                  className="email"
                  type="email"
                  name="email"
                  align="left"
                  required
                />
              </label>
              <label>
                Your Message:
                <textarea
                  name="message"
                  type="text"
                  rows="4"
                  cols="50"
                  required
                ></textarea>
              </label>
              <br></br>
              <button className="about_gs_contact-button">Talk To You Soon ...</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

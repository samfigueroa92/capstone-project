//Dependencies
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//CSS
import "./PersonalPage.css";

const PersonalPage = () => {
  const navigate = useNavigate();
  const { staffMember } = useParams();

  const [learnMore, setLearnMore] = useState({
    paraTwo: false,
  });

  const [ourTeam, setOurTeam] = useState({
    samantha: "Samantha Figueroa",
    tom: "Tom LaTulipe",
    kalilah: "Kalilah Clarke",
    adnan: "Adnan Abubakar Adams",
    sabrina: "Sabrina Escobar Flores",
    gigi: "Gigi Scarborough",
    tim: "Tim McKiernan",
    anber: "Amber Bennett",
  });

  const [email, setEmail] = useState({
    samantha: "samanthafigueroa@pursuit.org",
    tom: "tomlatulipe@pursuit.org",
    kalilah: "kalilahclarke@pursuit.org",
    adnan: "abubakaradnanadams@pursuit.org",
    sabrina: "sabrinaescobarflores@pursuit.org",
    gigi: "gigi@pursuit.org",
    tim: "tim@pursuit.org",
    amber: "amber.bennett@bettercloud.com",
  });

  // const [linkedIn, setLinkedIn] = useState({
  //   samantha: "https://www.linkedin.com/in/samantha-figueroa-fs/",
  //   tom: "https://www.linkedin.com/in/tom-latulipe-a6835120/",
  //   kalilah: "https://www.linkedin.com/in/kalilah-clarke-36876530/",
  //   adnan: "https://www.linkedin.com/in/adnan-abubakar-adams/",
  //   sabrina: "https://www.linkedin.com/in/sabrina-escobar-flores-9b57b011a/",
  //   gigi: "https://www.linkedin.com/in/gigimscarborough/",
  //   tim: "https://www.linkedin.com/in/tim-mckiernan/",
  //   amber: "https://www.linkedin.com/in/positivelyamber/",
  // });

  // const [gitHub, setGitHub] = useState({
  //   samantha: "https://github.com/samfigueroa92",
  //   tom: "https://github.com/Tetracell",
  //   kalilah: "https://github.com/KalilahClarke",
  //   adnan: "https://github.com/AdnanAbubakarAdams",
  //   sabrina: "https://github.com/Sabrinaescobar",
  //   gigi: "https://github.com/gigimscarborough",
  //   tim: "https://github.com/mckiernantim",
  //   amber: "https://github.com/PositivelyAmber",
  // });

  const [personalWebsite, setPersonalWebsite] = useState({
    samantha: "",
    tom: "",
    kalilah: "",
    adnan: "https://adnanabubakaradams.netlify.app/",
    sabrina: "",
    gigi: "https://gigiscarborough.com/",
    tim: "https://mckiernantim.github.io/",
    amber: "",
  });

  const [personalImage, setPersonalImage] = useState({
    samantha:
      "https://media-exp1.licdn.com/dms/image/C4E03AQECVVt3NEUc1w/profile-displayphoto-shrink_800_800/0/1640218996877?e=1675296000&v=beta&t=qOh5-OgIT3EZnw_kJaYrY2c-Ddvz7-0xc3nEKRBLuSE",
    tom: "https://media-exp1.licdn.com/dms/image/C4D03AQEUYyUqQXTZpQ/profile-displayphoto-shrink_400_400/0/1643244593566?e=1675296000&v=beta&t=ur66cryss1OIU3nw_bMOp5ERKJIC8_hdIQM7F983yfY",
    kalilah:
      "https://media-exp1.licdn.com/dms/image/C5603AQFIoVA0ltC1Fg/profile-displayphoto-shrink_400_400/0/1592177861401?e=1675296000&v=beta&t=TEdjqDhB8fGSMsbFlbTc1FN8ekSzc9W1j9svTORhncQ",
    adnan: "../images/website.png",
    sabrina:
      "https://media-exp1.licdn.com/dms/image/C4D03AQEzyzcsTrOxIA/profile-displayphoto-shrink_400_400/0/1642653227709?e=1675296000&v=beta&t=NP8cFNa1PUlQQyA5o9rw7FShxRr9Xg4RICU9L8AVSmk",
    gigi: "https://media-exp1.licdn.com/dms/image/C5603AQGPbCBiLuyDNw/profile-displayphoto-shrink_100_100/0/1600368314591?e=1675296000&v=beta&t=YQqpGSjhzjLK-2KVZ7UiQofkxNritSFmpRXpyBVy_yc",
    tim: "https://media-exp1.licdn.com/dms/image/C4D03AQEWmXUHScBZkQ/profile-displayphoto-shrink_400_400/0/1581017635510?e=1675296000&v=beta&t=zz8K7_ZDPyoOiXg56wcIUflKCijsbzsNpQ55IOm67No",
    amber:
      "https://media-exp1.licdn.com/dms/image/C5603AQFVQE55R7tcAA/profile-displayphoto-shrink_400_400/0/1601486381610?e=1675296000&v=beta&t=E-aQajVlSTPpHVqZxu7AEh1S7Uma34D4ddMUGxmCBS8",
  });

  const PARAGRAPHS = {
    paraTwo: `I  am an innovative and results-oriented software engineer with a strong passion for creating exceptional user-friendly/digital experiences, with projects such as GoldenSolutions where it connects the elderly with volunteers that are willing to help them get their  daily task done.

    As a life-long learner and a very rounded team player, I always grab the opportunity to learn, grow and improve my skills where ever I find my self. Technology is part of our lives and a fast moving train, that excites me a lot and having to connect with other people and use tech to solve problems is a dream come true.`,
  };

  const handleLearnMore = (paragraph) => {
    return learnMore[paragraph] ? (
      <>
        <p className="paras">{PARAGRAPHS[paragraph]}</p>
        <div
          onClick={() =>
            setLearnMore({ ...learnMore, [paragraph]: !learnMore[paragraph] })
          }
        >
          <p className="underline">View Less</p>
        </div>
      </>
    ) : (
      <div
        onClick={() =>
          setLearnMore({ ...learnMore, [paragraph]: !learnMore[paragraph] })
        }
      >
        <p className="underline">Learn More</p>
      </div>
    );
  };

  return (
    <div className="personal-page">
      <a href={personalWebsite[staffMember.toLowerCase()]}>
        <img
          className="image"
          src={personalImage[staffMember.toLowerCase()]}
          alt={`${staffMember}'s Website`}
        />
      </a>
      <div className="my-info">
        <h3 className="staff-name">{ourTeam[staffMember]}</h3>
        <p>
          "The Best Way To Find Yourself Is To Lose Yourself In The service Of
          Others - Mahatma Gandhi" Hey there! I recently completed a
          year-long Google-funded software engineering fellowship program at
          Pursuit in New York, NY, where I gained hands-on experience in
          developing full-stack web applications, and developed strong
          fundamentals in HTML, CSS, JavaScript, React/Redux, Express, Node.js,
          Next.js, and PostgreSQL..
        </p>
        {handleLearnMore("paraTwo")}
      </div>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-header">
            <p className="contact-title">Contact Me</p>
            <p className="contact-subtitle">
              Interested in working with me or just want to say hello? Don't
              hesitate to send a message!
            </p>
          </div>
          <div className="contact-form">
            <form
              className="contact-form-inner"
              action={`https://formsubmit.co/${email[staffMember]}`}
              method="Post"
            >
              <input
                type="hidden"
                name="subject"
                value="GoldenSolutions Contact"
                className="contact-input"
              />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="contact-input"
              />
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                className="contact-input"
              />
              <textarea
                name="message"
                rows="10"
                placeholder="Enter Message"
                className="contact-input"
              ></textarea>
              <button
                className="contact-button"
                onClick={() => navigate("/our-team")}
              >
                Talk To You Soon ...
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;

// strech goals
// const [skills, setskills] = useState({
//   samantha: [
//     "javascript",
//     "react",
//     "html",
//     "css",
//     "postgres",
//     "heroku",
//     "github",
//   ],
//   tom: ["javascript", "react", "html", "css", "postgres", "heroku", "github"],
//   kalilah: [
//     "javascript",
//     "react",
//     "html",
//     "css",
//     "postgres",
//     "heroku",
//     "github",
//   ],
//   adnan: [
//     "javascript",
//     "react",
//     "html",
//     "css",
//     "postgres",
//     "heroku",
//     "github",
//   ],
// });

// strech goals------
// const [skillImages, setSkillImages] = useState({
//   javascript: "",
//   react: "",
//   html: "",
//   css: "",
//   postgress: "",
//   heroku: "",
//   github: "",
//   java: "",
//   ruby: "",
//   spring: "",
//   openAPI: "",
//   python: "",
//   sql: "",
//   redux: "",
//   agilemethodologies: "",
// });

//Dependencies
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

//Components


//CSS
import "./PersonalPage.css";

const PersonalPage = () => {
  const {staffMember} = useParams();
  console.log(staffMember);

  const [ourTeam, setTeam] = useState([
    "samantha",
    "tom",
    "kalilah",
    "adnan",
    "sabrina",
    "gigi",
    "tim",
    "amber",
  ]);

  const [linkedIn, setLinkedIn] = useState({
    samantha: "https://www.linkedin.com/in/samantha-figueroa-fs/",
    tom: "https://www.linkedin.com/in/tom-latulipe-a6835120/",
    kalilah: "https://www.linkedin.com/in/kalilah-clarke-36876530/",
    adnan: "https://www.linkedin.com/in/adnan-abubakar-adams/",
    sabrina: "https://www.linkedin.com/in/sabrina-escobar-flores-9b57b011a/",
    gigi: "https://www.linkedin.com/in/gigimscarborough/",
    tim: "https://www.linkedin.com/in/tim-mckiernan/",
    amber: "https://www.linkedin.com/in/positivelyamber/",
  });

  const [gitHub, setGitHub] = useState({
    samantha: "https://github.com/samfigueroa92",
    tom: "https://github.com/Tetracell",
    kalilah: "https://github.com/KalilahClarke",
    adnan: "https://github.com/AdnanAbubakarAdams",
    sabrina: "https://github.com/Sabrinaescobar",
    gigi: "https://github.com/gigimscarborough",
    tim: "https://github.com/mckiernantim",
    amber: "",
  });
  const [personalWebsite, setPersonalWebsite] = useState({
    samantha: "",
    tom: "",
    kalilah: "",
    adnan: "",
    sabrina: "",
    gigi: "",
    tim: "",
    amber: "",
  });

  return (
    <div>
      <div>
        <h1>{staffMember}</h1>
        <a>{linkedIn[staffMember]}</a>
        <a>{gitHub[staffMember]}</a>
        <a>{personalWebsite[staffMember]}</a>
      </div>
    </div>
  );
};

export default PersonalPage;

//Dependencies
import React, {useState} from 'react'
import { Link } from "react-router-dom";

//Components
import OurPage from './OurPage';

//CSS
import './PersonalPage.css'

const PersonalPage = () => {

const [ourTeam, setTeam] = useState(["samantha", "tom", "kalilah", "adnan","sabrina", "gigi", "tim", "amber"])

const [linkedIn, setLinkedIn] = useState({
    samantha:'https://www.linkedin.com/in/samantha-figueroa-fs/',
    tom:'https://www.linkedin.com/in/tom-latulipe-a6835120/',
    kalilah:'https://www.linkedin.com/in/kalilah-clarke-36876530/',
    adnan:'https://www.linkedin.com/in/adnan-abubakar-adams/',
    sabrina:'https://www.linkedin.com/in/sabrina-escobar-flores-9b57b011a/',
    gigi:'https://www.linkedin.com/in/gigimscarborough/',
    tim:'https://www.linkedin.com/in/tim-mckiernan/',
    amber:'https://www.linkedin.com/in/positivelyamber/'
})

const [gitHub, setGitHub] = useState({
    samantha:'https://github.com/samfigueroa92',
    tom:'https://github.com/Tetracell',
    kalilah: 'https://github.com/KalilahClarke',
    adnan: 'https://github.com/AdnanAbubakarAdams',
    sabrina: 'https://github.com/Sabrinaescobar',
    gigi: 'https://github.com/gigimscarborough',
    tim: 'https://github.com/mckiernantim',
    amber: '',
})
const [personalWebsite, setPersonalWebsite] = useState({
    samantha:'',
    tom:'',
    kalilah:'',
    adnan:'',
    sabrina: '',
    gigi: '',
    tim: '',
    amber: ''
})

  return (
    <div>
        {ourTeam.map((staff)=>
        <div>
            <h1>{staff}</h1>
            <h1>{linkedIn[staff]}</h1>
            <h1>{linkedIn[staff]}</h1>
            <h1>{personalWebsite[staff]}</h1>
      </div>
        )}
    </div>
  )
}

export default PersonalPage
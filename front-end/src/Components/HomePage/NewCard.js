import React from "react";
import "./NewCard.css"
import NewCardData from "./NewCardData";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const NewCard = () => {

    const navigate = useNavigate();
  return (
    <div className="new-cards">
      <div className="new-info">
        <div>
          <h1>How it works...</h1>
          <p>
            As you grow you become wiser and have many life experiences. Getting
            older is a normal part of life with it's up's and down's. You may
            also find that basic everday tasks become a little bit more
            difficult and you could use some help.
            {/* <br /> */}
            {/* <br /> */}
            That's where we come in! Our goal at GoldenSolutions is to relieve
            some of the stress and anxiety of these situations by connecting
            seniors, who need an extra hand with everyday tasks, with local,
            friendly volunteers who are willing and able to lend their time and
            skills.
            {/* <br /> */}
            {/* <br /> */}
            Immediate families and friends may not always be available to offer
            help. But New York has thousands of helpful individuals just a
            button click away ready to lend a hand. Together, we can continue to
            foster a sense of community!
            {/* <br /> */}
            {/* <br /> */}
            All of our users are verified after a rigrous background check. With
            a few simple and straightforward steps, you will seamlessly be
            connected with someone who best meets your needs.
          </p>
        </div>
        <Button onClick={() => navigate("/sign-up")}>SIGN UP NOW</Button>
      </div>
      <div className='new-card-holder'>
      <div className='new-card-wrap'>
        <ul className='new-cards-items'>
        <NewCardData
            src='images/computerHelp.jpeg'
            text='Helping granny with her Ipad'
            label='Golden Solutions'
            path='#'
          />
          <NewCardData
            src='images/RechargeCard.jpeg'
            text='Help GrandMa with recharge card'
            label='Golden Solutions'
            path='#'
          />
          <NewCardData
            src='images/gettingup.jpeg'
            text='Taking a walk with Grand Dad'
            label='Golden Solutions'
            path='#'
          />

        </ul>
        {/* <Button onClick={() => navigate("/sign-up")}>SIGN UP NOW</Button> */}
        </div>
        </div>
        <div className="blurbs">
          <section className="support">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1189/1189206.png"
              alt="support-icon"
            />
            <h4>Support</h4>
            <p>Everyone needs a little help sometimes!</p>
          </section>
          <section className="community">
            <img
              src="https://icons.veryicon.com/png/o/business/classic-icon/community-12.png"
              alt="community-icon"
            />
            <h4>Community</h4>
            <p>Get to know new people or help old friends!</p>
          </section>
          <section className="safety">
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/3vjia-icon-line/safety-guarantee-3.png"
              alt="safety-icon"
            />
            <h4>Safety Guaranteed</h4>
            <p>All users are checked and verified!</p>
          </section>
        </div>
    </div>
  );
};

export default NewCard;

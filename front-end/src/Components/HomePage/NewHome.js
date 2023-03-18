import React from 'react';
import NewCard from "./NewCard";
import "./NewHome.css";

const NewHome = () => {
  return (
    <>
    <div className='new-home'>
        <video src='/video/volunteer.mov' autoPlay loop muted />
    </div>
        <NewCard />
    </>
  )
}

export default NewHome;
import React from "react";
import { Link } from "react-router-dom";

const NewCardData = (props) => {
  return (
    <>
      <li className="card-item">
        <Link className="card-link" to={props.path}>
          <figure className="card-pic" data-category={props.label}>
            <img className="card-Img" alt="helpers" src={props.src} />
          </figure>
          <div className="card-info">
            <h5 className="card-text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default NewCardData;

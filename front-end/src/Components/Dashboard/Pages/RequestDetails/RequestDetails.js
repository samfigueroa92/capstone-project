///Dependencies
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {  IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';

//CSS
import "./RequestDetails.css";

//Bootstrap
import Button from "react-bootstrap/Button";

const RequestDetails = ({ 
  applicationUser,
  setReviewFormRevealed,
  iteration,
  location,
  request,
  render,
  setRender
 }) => {

  const [showMore, setShowMore] = useState(false)
  let { id } = useParams();
  let navigate = useNavigate();

  const index = iteration[location]?.indexOf(Number(id))

  const API = process.env.REACT_APP_BACKEND_API_KEY;

  const truncateDescriptionText = () =>{
    if(request.description?.length > 100){
      let description = request.description.slice(0,100)
      return ( <div className="ellipsis"> 
         {!showMore ?  <p className='expand'>{description}<button  className= 'showDetails'onClick = {()=> {setShowMore(!showMore)}}><SlArrowDown/></button></p> : <p>{request.description}<button className= 'showDetails' onClick = {()=>{setShowMore(!showMore)}}><SlArrowUp/></button></p> }
      </div>
      )
    }else{
      return (
        <div className = 'ellipsis'>
          <p>{request.description}</p>
        </div>
      )
    }
  }
  let description = truncateDescriptionText()

  const requestAccepted = () => {
    axios
      .put(`${API}/requests/accept_request`, {
        volunteer: applicationUser.uuid,
        volunteer_img: applicationUser.profilephoto,
        req_id: id,
      })
      .then(navigate("/dashboard"));
      setRender(!render);
  };

  const requestRejected = () => {
    axios
      .put(`${API}/requests/reject_request`, {
        req_id: id,
        volunteer: "",
        volunteer_img: "",
      })
      .then(navigate("/dashboard"));
      setRender(!render);
  };

  const dateConverter = (specifiedDate = "") => {
    const fullYear = specifiedDate.getFullYear();
    const month = specifiedDate.getMonth() + 1;
    const paddedMonth = month.toString().padStart(2, "0");
    const currentDate = specifiedDate.getDate();
    const paddedDate = currentDate.toString().padStart(2, "0");

    const formattedDate = `${fullYear}-${paddedMonth}-${paddedDate}`;

    return formattedDate;
  };

  let currentDate = dateConverter(new Date());

  return (
    <div className='layout'>

      <div className="cards">
       {(iteration[location] && iteration[location][index-1]) ? <IoIosArrowBack  className ='center left' size={ 40 } onClick={()=> navigate(`/requests/${iteration[location][index-1]}`)}/>: <div></div>}
       
      <div>
        <div className='card-holder'>
          <div className="card-wrap">
            <div className="card-items-forward">
              <figure className='card-fig' data-category='GoldenSolutions'>
                <img className= 'cardImg'
                alt='vol'
                src={request.image || "https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png"
              }
              />
              </figure>
            <div className='card-info'>
              <h5 className='card-description'>
                <strong>Job Description:</strong>
                {description}
              </h5>
              <h4 className="card-text">
                <strong>Location: </strong>
                {request.location}
              </h4>
              <p className="warning">
                <span className='red'>*</span> 
                Cancellations within 24 hours
                or missing your appointment will result in a negative review
                & rating.
              </p>
            </div>
            </div>

          </div>

        </div>
        <div className="buttons">
          
          <div>
            <Link to="/dashboard">
              <Button className="back accept" onClick= {()=> setRender(!render)}>BACK</Button>
            </Link>
          </div>
          <div>
            {applicationUser.user_type === "Volunteer" ? (
              request.volunteer_id !== applicationUser.uuid ? (
                <Button className="accept" onClick={requestAccepted}>
                  ACCEPT
                </Button>
              ) : request.complete && request.req_date < currentDate ? (
                <Button
                className="reject"
                onClick={()=>setReviewFormRevealed(true)}
                >
                  REVIEW
                </Button>
              ) : (
                <Button className="reject" onClick={requestRejected}>
                  REJECT
                </Button>
              
              )
            ) : (
              <Link to={`/edit/${id}`}>
                <Button className="edit">EDIT</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
        {(iteration[location] && iteration[location][index+1])  ? <IoIosArrowForward  className='center right' size={ 40 } onClick={()=> navigate(`/requests/${iteration[location][index+1]}`)}/>: <div></div>}
      </div>
   </div>
  );
};

export default RequestDetails;

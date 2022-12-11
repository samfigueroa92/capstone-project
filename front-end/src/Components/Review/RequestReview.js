import React, { useEffect, useState } from "react"
import axios from "axios"

import SidebarNav from "../Dashboard/SidebarNav"
import ReviewDetails from './ReviewDetails'
import  './RequestReview.css'

const API = process.env.REACT_APP_BACKEND_API_KEY;
const RequestReview = ({applicationUser, setDate, requests}) => {
 
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get(`${API}/reviews/submitted/${applicationUser.uuid}`)
        .then((response) => {
          setReviews(response.data);
        });
      }, [API]);
    
   
    return (
        <div className = 'user-dashboard'>
             <div className="sidebar-nav">
            <SidebarNav setDate={setDate} applicationUser={applicationUser}/>
            </div>
            <div className='profile-pic'>
                <img className='img-review' src={applicationUser.profilephoto} alt={applicationUser.firstName +' '+ applicationUser.lastname}/>
            </div>
            <div className='reviews'>
             <input type="radio" id="my-reviews" name="reviewed" />
             <label for="my-reviews">My Reviews</label>
             <input type="radio" id="received-reviews" name="reviewed"/>
             <label for="received-reviews">Reviews Received</label>

            {reviews.map((review,index)=><ReviewDetails key={index} review={review} requests ={requests}/> )}
            </div>
        </div>
    )
}
  export default RequestReview
;
  
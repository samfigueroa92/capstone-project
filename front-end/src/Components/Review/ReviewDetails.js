import React, {useState} from 'react'
import './ReviewDetail.css'


const ReviewDetail = ({review, requests}) =>{
    const [requestInfo, setRequestInfo] = useState({})
   console.log(requests)
 requests.map((request)=>{
            if(review.request_id === request.id){
                setRequestInfo(request)
            }
        })
        console.log(requestInfo)
    return(
    // reviewer_id TEXT references users(uuid),
    // description TEXT NOT NULL,
    // post_date DATE NOT NULL,
    // request_id INT references requests(id)
        <div>
        
        <label for="posted_date">Date: </label>
        <p className='posted_date'>{review.post_date}</p>
        <label for='description'>Description: </label>
        <p className='description'>{review.description}</p>
        </div>
    )
}
export default ReviewDetail
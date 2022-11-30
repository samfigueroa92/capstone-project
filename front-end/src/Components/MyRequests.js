import React, { useState, useEffect } from "react";

import RequestCard from "./RequestCard";
import "./MyRequests.css"

const MyRequests = ({requests, date, currentUser}) => {

    const [value, setValue] = useState('')
    useEffect(()=>{
            if(date){
                setValue((date.getFullYear()+"-"+ (date.getMonth() + 1)+"-"+ date.getDate()))
            }
        },[date])

    return (
        <div className='my-requests'>
             <h3>My Requests</h3>
             <div className="my-list">
                {requests.map(request => request.assigned && (request.req_date >= value) && currentUser.uid === request.volunteer_id ? <RequestCard request={request} /> : null)}
             </div>
        </div>
    );
};

export default MyRequests;
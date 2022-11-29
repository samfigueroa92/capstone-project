import RequestCard from "./RequestCard";
import "./OpenRequests.css"
import { useEffect, useState } from "react";

const OpenRequests = ({requests, date}) => {
   const [value, setValue] = useState('')
    useEffect(()=>{
            if(date){
                setValue((date.getFullYear()+"-"+ (date.getMonth() + 1)+"-"+ date.getDate()))
            }
        },[date])
    
   
    return (
        <div className="open-requests">
            <h3>Open Requests</h3>
            <div className="open-list">
            {requests.map(request=> (!request.assigned && request.req_date >= value) ?  <RequestCard key={request.id}request={request} /> : null)}
            </div>
        </div>
    );
};
export default OpenRequests;
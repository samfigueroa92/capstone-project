import RequestCard from "./RequestCard";
import "./MyRequests.css"

const MyRequests = ({requests, date}) => {
    const [elder_id, volunteer_id, req_date,description,location,time, assigned, complete] = requests



    


    return (
        <div className='my-requests'>
             <h3>My Requests</h3>
             <div className="my-list">
                {requests.map(request => request.assigned ? <RequestCard request={request} /> : null)}
             </div>
        </div>
    );
};

export default MyRequests;
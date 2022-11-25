import RequestCard from "./RequestCard";
import "./MyRequests.css"

const MyRequests = ({requests}) => {
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
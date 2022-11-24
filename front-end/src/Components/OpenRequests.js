import RequestCard from "./RequestCard";
import "./OpenRequests.css"

const OpenRequests = ({requests}) => {
    return (
        <div className="open-requests">
            <h3>Open Requests</h3>
            <div className="open-list">
            {requests.map(request => request.assigned ? null : <RequestCard request={request} />)}
            </div>
        </div>
    );
};

export default OpenRequests;
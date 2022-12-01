import React, {useState, useEffect} from 'react'
import axios from 'axios'

//Import Components
import SidebarNav from './SidebarNav'

//Import CSS
import './AcceptRequestPage.css'

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const AcceptRequestPage = ({date, setDate, applicationUser}) => {
    const [value, setValue] = useState('')
    const [requests, setRequests] = useState([])
    useEffect(()=>{
            if(date){
                setValue((date.getFullYear()+"-"+ (date.getMonth() + 1)+"-"+ date.getDate()))
            }
        },[date])
        console.log(applicationUser)

        useEffect(() => {
            axios
              .get(`${API}/requests`)
              .then((res) => setRequests(res.data))
              .catch((err) => console.error(err));
          }, []);
          console.log(requests)
        
          requests.sort((a, b) => a.req_date - b.req_date);

  return (

    <div className='user-dashboard'>
        <SidebarNav setDate = {setDate} />
        <div className = 'main-page'>
        <h3 className='accepted-request'>Accepted Request</h3>
        <div className = 'Accepted'> {requests.map(request=> request.assigned && (request.volunteer_id === applicationUser.uuid) && request.req_date >= value)}</div>
        <h3>Completed Request</h3>
        <div className ='History'>{requests.map(request=> request.completed && (request.volunteer_id === applicationUser.uuid) && value > request.req_date)}</div>
        </div>
    </div>
  )
}


export default AcceptRequestPage
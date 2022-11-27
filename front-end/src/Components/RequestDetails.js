import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const RequestDetails = () => {

    const [user, setUser] = useState([]);
    let { id } = useParams();
    let navigate = useNavigate();

    const API = process.env.REACT_APP_BACKEND_API_KEY;

    // GET A USER DETAILS VOLUNTEER OR ELDER REQUEST
    useEffect(() => {
        axios.get(`${API}/requests/${id}`)
        .then((response) => {
            setUser(response.data)
        })
    }, [id, navigate, API]);

  return (
    <div>
        <h4>{user.description}</h4>
        <h4>{user.location}</h4>
    </div>
  )
}

export default RequestDetails;
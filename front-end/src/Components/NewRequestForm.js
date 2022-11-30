import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


// API 
const API = process.env.REACT_APP_BACKEND_API_KEY;

const NewRequestForm = () => {

    let navigate = useNavigate();

    // CREATE OR ADD A NEW REQUEST
    const makeRequest = (newRequest) => {
        axios.post(`${API}/requests`, newRequest)
        .then(() => {
            navigate(`/requests`)
        },
        (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c))
    }

    const [request, setRequest] = useState({
        title: "",
        req_date: "",
        description: "",
        location: "",
        time: "", 
        image: "",
    });
  return (
    <div>
    
    </div>
  );
};

export default NewRequestForm;

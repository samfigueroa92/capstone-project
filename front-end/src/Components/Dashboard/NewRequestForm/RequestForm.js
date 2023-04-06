import React from "react";

import "./RequestForm.css";

//Dependencies
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../../Providers/UserProviders";

// MATERIAL UI
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  MenuItem,
} from "@mui/material";

//Components
// import SidebarNav from "../SideNav/SidebarNav";

// API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const RequestForm = ({
  applicationUser,
  setDashboardFilter
}) => {
  let navigate = useNavigate();
  let user = useContext(UserContext);

  // CREATE OR ADD A NEW REQUEST
  const makeRequest = (newRequest) => {
    debugger;
    axios
      .post(`${API}/requests/new-request`, {
        ...newRequest,
        elder_id: user.uid,
      })
      .then(
        () => {
          navigate("/user-dashboard");
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [request, setRequest] = useState({
    elder_id: applicationUser.uuid,
    elder_img: applicationUser.profilephoto,
    title: "",
    req_date: "",
    description: "",
    location: "",
    time: "",
    image: "",
  });

  // text change method
  const textChange = (e) => {
    setRequest({ ...request, [e.target.id]: e.target.value });
  };

  // submit method
  const handleSubmit = (e) => {
    e.preventDefault();
    makeRequest(request);
    setDashboardFilter("main")
  };
  return (
    <Grid className="user-dashboard">
      {/* <div className="form_sidebar-nav">
        <SidebarNav
          setDate={setDate}
          date={date}
          applicationUser={applicationUser}
          setRequestSearch={setRequestSearch}
          requestSearch={requestSearch}
        />
      </div> */}
      <Card className="request-form-card">
        <CardContent>
          <h3>Submit A Request</h3>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Request Title"
                  placeholder="Grocery Pick Up"
                  variant="outlined"
                  id="title"
                  value={request.title}
                  onChange={textChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  // label="Request Date"
                  type="date"
                  variant="outlined"
                  id="req_date"
                  helperText="Request Date"
                  value={request.req_date}
                  onChange={textChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Request Description"
                  placeholder="Please Tell us what you need..."
                  multiline
                  rows={4}
                  variant="outlined"
                  id="description"
                  value={request.description}
                  onChange={textChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={4} item>
                <TextField
                  label="Location"
                  placeholder="123 Somewhere St"
                  variant="outlined"
                  id="location"
                  value={request.location}
                  onChange={textChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={4} item>
                <TextField
                  type="time"
                  variant="outlined"
                  id="time"
                  helperText="Request Time"
                  value={request.time}
                  onChange={textChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={4} item>
                <TextField
                  label="Request Image"
                  placeholder="upload image"
                  variant="outlined"
                  id="image"
                  value={request.image}
                  onChange={textChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                  <Button sx={{background:'#42999b !important'}} className="new-button" type="submit" variant="contained" fullWidth>
                    Submit
                  </Button>
                </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default RequestForm;

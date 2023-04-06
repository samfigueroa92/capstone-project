import React from "react";
// css
import "./ProfileSettings.css";

//Dependencies
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../Providers/UserProviders";
import { useContext } from "react";

//Component
import SidebarNav from "../SideNav/SidebarNav";

// MATERIAL UI COMPONENTS
import { Card, CardContent, Grid, TextField, Button, MenuItem } from "@mui/material";

import Container from "react-bootstrap/Container";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

//STATES PACKAGE --> https://www.npmjs.com/package/usa-states
const UsaStates = require("usa-states").UsaStates;

const ProfileSettings = ({ applicationUser, setDashboardFilter }) => {
  // let navigate = useNavigate();
  const usStates = new UsaStates();
  const user = useContext(UserContext);

  const [editedUser, setEditedUser] = useState({
    address: "",
    city: "",
    dob: "",
    email: "",
    firstname: "",
    languages: "",
    lastname: "",
    phonenumber: "",
    profilephoto: "",
    state: "",
    unit: "",
    user_type: "",
    uuid: "",
    verification_type: "",
    verified: "",
    zipcode: "",
  });

  useEffect(() => {
    setEditedUser(applicationUser);
  }, []);

  const updateUser = (updatedUser) => {
    axios
      .put(`${API}/users/${applicationUser.uuid}`, updatedUser)
      .then(
        () => {
          setDashboardFilter('main')
          // navigate(`/user-dashboard`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setEditedUser({ ...editedUser, [event.target.id]: event.target.value });
    console.log(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(editedUser);
  };

  return (

      <div className="update-form-card">
        {/* <SidebarNav setDate={setDate} applicationUser={applicationUser} /> */}
        <Container className="settings">
          <h3 className="settings-header">Update Your Profile</h3>
          <div className="profile-image">
            <img
              src={
                applicationUser.profilephoto
                  ? applicationUser.profilephoto
                  : user.photoURL
              }
              alt="profile-photo"
            />
          </div>
      

      <Grid>
        <Card className="">
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    disabled
                    label="First Name"
                    id="firstname"
                    value={applicationUser.firstname}
                    onChange={handleTextChange}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Last Name"
                    id="lastname"
                    disabled
                    value={applicationUser.lastname}
                    onChange={handleTextChange}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Date Of Birth"
                    id="dob"
                    value={applicationUser.dob}
                    disabled
                    onChange={handleTextChange}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField 
                  label="Email"
                  id="email"
                  value={applicationUser.email}
                  onChange={handleTextChange}
                  variant="outlined" 
                  fullWidth 
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Address Line 1"
                    id="address"
                    value={editedUser.address}
                    onChange={handleTextChange}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    label="Address Line 2"
                    id="unit"
                    value={editedUser.unit}
                    onChange={handleTextChange}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField 
                  label="City"
                  id="city"
                  value={editedUser.city}
                  onChange={handleTextChange}
                  variant="outlined" 
                  fullWidth 
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField 
                  select
                  label="State"
                  value={editedUser.state}
                  onChange={handleTextChange}
                  variant="outlined" 
                  fullWidth
                  >
                    {usStates.states.map((state) => (
                      <MenuItem key={state.name} value={state.abbreviation}>
                        {state.abbreviation}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    label="Zip Code"
                    type="number"
                    id="zipcode"
                    value={editedUser.zipcode}
                    onChange={handleTextChange}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    type="tel"
                    label="Phone Number"
                    id="phonenumber"
                    value={editedUser.phonenumber}
                    onChange={handleTextChange}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Upload A Photo"
                    id="profilephoto"
                    value={editedUser.profilephoto}
                    onChange={handleTextChange}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button className="new-button" sx={{background:'#42999b !important'}} type="submit" variant="contained" fullWidth>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      </Container>
      </div>
    
  );
};

export default ProfileSettings;

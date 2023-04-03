import React from "react";
//Dependencies
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

//Components
import SidebarNav from "../SideNav/SidebarNav";

//CSS
import "./EditSubmittedRequest.css";

// MATERIAL UI
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent
} from "@mui/material";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const EditSubmittedRequest = ({
  applicationUser,
  setDate,
  date,
  setRequestSearch,
  requestSearch,
}) => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [editedRequest, setEditedRequest] = useState({
    title: "",
    req_date: "",
    description: "",
    location: "",
    time: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/requests/help_req/${id}`)
      .then((res) => setEditedRequest(res.data))
      .then((res) => console.log(res.data));
  }, [id]);

  const updateRequest = () => {
    axios
      .put(`${API}/requests/edit_req/${id}`, editedRequest)
      .then((res) => setEditedRequest(res.data))
      .then(() => navigate("/user-dashboard"))
      .catch((error) => console.error(error));
  };

  const handleTextChange = (e) => {
    setEditedRequest({ ...editedRequest, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRequest(editedRequest, id);
  };

  const handleDelete = () => {
    axios
      .delete(`${API}/requests/delete_req/${id}`)
      .then(() => navigate("/user-dashboard"))
      .catch((err) => console.error(err));
  };

  return (
    <Grid className="edit-request">
    <SidebarNav applicationUser={applicationUser} setDate={setDate} date ={date} setRequestSearch = {setRequestSearch} requestSearch={requestSearch} />
    <Card className="edit-form">
      <h3>Edit Request</h3>
      <Grid className="edit-image">
      <img src={editedRequest.image} alt="requestimg"/>
      </Grid>
      <CardContent>
      <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Request Title"
                  placeholder="Grocery Pick Up"
                  variant="outlined"
                  id="title"
                  value={editedRequest.title}
                  onChange={handleTextChange}
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
                  value={editedRequest.req_date}
                  onChange={handleTextChange}
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
                  value={editedRequest.description}
                  onChange={handleTextChange}
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
                  value={editedRequest.location}
                  onChange={handleTextChange}
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
                  value={editedRequest.time}
                  onChange={handleTextChange}
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
                  value={editedRequest.image}
                  onChange={handleTextChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} className="editForm-button">
                  <Button sx={{background:'#42999b !important'}} type="submit" variant="contained" >
                    Submit
                  </Button>
                  <Button sx={{background:'#42999b !important'}} onClick={handleDelete}variant="contained" >
                    Deletee
                  </Button>
                </Grid>
            </Grid>
          </form>
      </CardContent>
      </Card>
      </Grid>
  );
};

export default EditSubmittedRequest;

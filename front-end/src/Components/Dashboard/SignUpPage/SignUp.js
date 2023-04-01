import React from "react";
import "./SignUp.css";

//DEPENDENCIES
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Providers/UserProviders";
import { useContext } from "react";
import { signUpWithGoogle } from "../../../Services/Firebase";

// MATERIAL UI
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  MenuItem,
  FormControl
} from "@mui/material";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

//STATES PACKAGE --> https://www.npmjs.com/package/usa-states
const UsaStates = require("usa-states").UsaStates;

const SignUp = ({ setApplicationUser }) => {
  const [authErrors, setAuthErrors] = useState([]);
  const usStates = new UsaStates();

  const user = useContext(UserContext);

  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    address: "",
    unit: "",
    city: "",
    state: "",
    zipcode: "",
    phonenumber: "",
    email: "",
    verified: false,
    user_type: "",
    profilephoto: "",
    languages: "",
    verification_type: "",
  });

  

  useEffect(() => {
    const submitUser = async () => {
      if (user?.uid) {
        axios
          .post(`${API}/users`, { ...newUser, uuid: user.uid })
          .then((res) => {
            if (res.data.payload.uuid) {
              setAuthErrors([]);
              setApplicationUser(res.data.payload);
              navigate("/user-dashboard");
            } else {
              user
                .delete()
                .then(() =>
                  setAuthErrors([
                    ...authErrors,
                    "Sign up failed, please try again.",
                  ])
                );
            }
          });
      }
    };

    submitUser();
  }, [user]);

  const navigate = useNavigate();

  const verification = [
    {
      value: 'State ID',
      label: 'State ID',
    },
    {
      value: 'Passport',
      label: 'Passport',
    },
    {
      value: "Driver's License",
      label: "Driver's License",
    }
  ]
  const typeOfUser = [
    {
      value: 'Senior',
      label: 'Senior',
    },
    {
      value: 'Volunteer',
      label: 'Volunteer',
    }
  ]

  const handleInput = (e) => {
    setNewUser({ ...newUser, [e.target.id]: e.target.value });
    // console.log(e.target.id)
    console.log(e.target.value)
    // console.log(e.target.name)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpWithGoogle();
  };

  return (
    <div className="sign-up">
      <div className="signup-text">
        <h1>Join Us Today!</h1>
        <div className="instructions">
          <p className="p1">
            Welcome! Before we get started, please fill out the following form
            with the required information.
          </p>
          <p className="p2">
            <strong>Verification Process:</strong>
          </p>
          <ol>
            <li>
              Shortly after submitting your information, you should receive an
              email from us with further instructions.{" "}
              <em>
                {
                  "If you are signing up to our website on behalf of a senior (you are a family member, caregiver, etc.) please include that information when emailing us back."
                }
              </em>
            </li>
            <li>
              Once all of the proper information is submitted, a background
              check will be done.
            </li>
            <li>
              A cleared background check will verify your account so you may
              begin using our site.
            </li>
          </ol>
          <p className="p3">It's as simple as 1, 2, 3!</p>
          <p className="p4">
            <span className="required-field">*</span>
            <em>Required Fields</em>
          </p>
        </div>
      </div>

      <Grid>
        <Card className="signUp-form-card">
          <CardContent>
            <FormControl>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="First Name"
                    placeholder="Adnan"
                    variant="outlined"
                    id="firstname"
                    value={newUser.name}
                    onChange={handleInput}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Last Name"
                    placeholder="Adams"
                    variant="outlined"
                    id="lastname"
                    value={newUser.lastname}
                    onChange={handleInput}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    type="date"
                    placeholder="mm/dd/yyyy"
                    variant="outlined"
                    id="dob"
                    value={newUser.dob}
                    onChange={handleInput}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    type="email"
                    label="Email"
                    placeholder="goldensolution@gmail.com"
                    variant="outlined"
                    helperText="We'll never share your email with anyone else."
                    id="email"
                    value={newUser.email}
                    onChange={handleInput}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Address Line 1"
                    placeholder="1234 GoldenSolutions St."
                    variant="outlined"
                    id="address"
                    value={newUser.address}
                    onChange={handleInput}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Address Line 2"
                    placeholder="Apt# 35"
                    variant="outlined"
                    id="unit"
                    value={newUser.unit}
                    onChange={handleInput}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={9} item>
                  <TextField
                    label="City"
                    placeholder="Bronx"
                    variant="outlined"
                    id="city"
                    value={newUser.city}
                    onChange={handleInput}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    label="State"
                    select
                    variant="outlined"
                    id="state"
                    value={newUser.state.abbreviation}
                    onChange={handleInput}
                    fullWidth
                    required
                  >
                    {usStates.states.map((state) => (
                      <MenuItem key={state.name} value={state.abbreviation}>{state.abbreviation}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    type="number"
                    label="Zip Code"
                    placeholder="10999"
                    variant="outlined"
                    id="zipcode"
                    value={newUser.zipcode}
                    onChange={handleInput}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    type="number"
                    label="Phone Number"
                    placeholder="1234567890"
                    id="phonenumber"
                    value={newUser.phonenumber}
                    onChange={handleInput}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    select
                    label="Verification Type"
                    // variant="outlined"
                    id="verification_type"
                    value={newUser.verification_type.value}
                    onChange={handleInput}
                    fullWidth
                    required
                  >
                    {verification.map((verify) => (
                    <MenuItem key={verify.value} value={verify.value}>
                    {verify.label}
                    </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    label="Preferred Language"
                    placeholder="English"
                    variant="outlined"
                    id="languages"
                    value={newUser.languages}
                    onChange={handleInput}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Upload Photo"
                    placeholder="Image"
                    variant="outlined"
                    helperText="Please upload a photo in which your face is visible."
                    id="profilephoto"
                    value={newUser.profilephoto}
                    onChange={handleInput}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    select
                    label="User Type"
                    variant="outlined"
                    id="user_type"
                    value={newUser.user_type.typeU}
                    onChange={handleInput}
                    fullWidth
                    required
                  >
                    {typeOfUser.map((typeU) => (
                    <MenuItem key={typeU.value} value={typeU.value}>
                    {typeU.label}
                    </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <Button className="new-button" sx={{background:'#42999b'}} type="submit" variant="contained" fullWidth>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
            </FormControl>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default SignUp;

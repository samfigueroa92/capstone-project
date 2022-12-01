import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "./Settings.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import App from "../App";

const API = process.env.REACT_APP_API_URL;

//Component Imports

//CSS Imports

//Cannot be edited: Name, Date of Birth, Email
//Should not be visible: SSN, Verification Type

//Everything else should be visible and a button to Edit info

function Settings({ applicationUser }) {
  console.log(applicationUser);

  let navigate = useNavigate();

  const states = {
    Alabama: "AL",
    Alaska: "AK",
    Arizona: "AZ",
    Arkansas: "AR",
    California: "CA",
    "Canal Zone": "CZ",
    Colorado: "CO",
    Connecticut: "CT",
    Delaware: "DE",
    "District of Columbia": "DC",
    Florida: "FL",
    Georgia: "GA",
    Guam: "GU",
    Hawaii: "HI",
    Idaho: "ID",
    Illinois: "IL",
    Indiana: "IN",
    Iowa: "IA",
    Kansas: "KS",
    Kentucky: "KY",
    Louisiana: "LA",
    Maine: "ME",
    Maryland: "MD",
    Massachusetts: "MA",
    Michigan: "MI",
    Minnesota: "MN",
    Mississippi: "MS",
    Missouri: "MO",
    Montana: "MT",
    Nebraska: "NE",
    Nevada: "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    Ohio: "OH",
    Oklahoma: "OK",
    Oregon: "OR",
    Pennsylvania: "PA",
    "Puerto Rico": "PR",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    Tennessee: "TN",
    Texas: "TX",
    Utah: "UT",
    Vermont: "VT",
    "Virgin Islands": "VI",
    Virginia: "VA",
    Washington: "WA",
    "West Virginia": "WV",
    Wisconsin: "WI",
    Wyoming: "WY",
  };
  //"dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "user_type", "state"
  const [editedUser, setEditedUser] = useState({
    firstname: applicationUser.firstname,
    lastname: "",
    dob: "",
    address: "",
    unit: "",
    city: "",
    zipcode: "",
    phonenumber: "",
    email: "",
    profilephoto: "",
    user_type: "",
    state: "",
  });

  //axios needs to be work on base on login model
  const updateUser = (updatedUser) => {
    axios
      .put(`${API}/users`, updatedUser)
      .then(
        () => {
          navigate(`/user-dashboard`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setEditedUser({ ...editedUser, [event.target.id]: event.target.value });
  };

  // useEffect(() => {
  //   axios.get(`${API}/users/${applicationUser.uuid}`)
  //     .then(response => setEditedUser(response.data))//probably be change to response.data.payload
  //     .catch((error) => console.log("not found")
  //     );
  //   }, [navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(editedUser, applicationUser.uuid);
  };

  return (
    <div className="profileInfo">
      <Container>
        <h3>General Information</h3>
        <div className="form-profile">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                disabled
                id="firstname"
                value={applicationUser.firstname}
                type="text"
                onChange={handleTextChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                disabled
                id="lastname"
                value={applicationUser.lastname}
                type="text"
                onChange={handleTextChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDOB">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                disabled
                id="dob"
                value={applicationUser.dob}
                type="date"
                onChange={handleTextChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                disabled
                id="email"
                value={applicationUser.email}
                type="email"
                onChange={handleTextChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddressLine1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                id="address"
                value={applicationUser.address}
                type="text"
                onChange={handleTextChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                id="city"
                value={applicationUser.city}
                type="text"
                onChange={handleTextChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicState">
              <Form.Label>State</Form.Label>
              <Form.Select
                value={applicationUser.state}
                onChange={handleTextChange}
              >
                <option>--Select State--</option>
                {Object.values(states).map((state) => (
                  <option>{state}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicZip">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                id="zipcode"
                value={applicationUser.zipcode}
                type="number"
                onChange={handleTextChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                id="phonenumber"
                value={applicationUser.phonenumber}
                type="tel"
                onChange={handleTextChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoto">
              <Form.Label>Upload New Photo</Form.Label>
              <Form.Control
                id="profilephoto"
                value={applicationUser.profilephoto}
                type="file"
                onChange={handleTextChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <input type="submit" />
          </Form>
          <Link to={`/users/${applicationUser.uuid}`}>
            <button>Nevermind!</button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Settings;

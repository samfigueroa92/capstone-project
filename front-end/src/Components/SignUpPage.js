import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Providers/UserProviders";
import { useContext } from "react";
import { signUpWithGoogle } from "../Services/Firebase";

//Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

//CSS
import "./SignUpPage.css";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const SignUpPage = () => {
  const [authErrors, setAuthErrors] = useState([]);

  //for later https://www.npmjs.com/package/usa-states
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
        .then(res => {
          if(res.data.payload.uuid){
            setAuthErrors([]);
            navigate("/user-dashboard");
          }else{
            user.delete().then(() => setAuthErrors([...authErrors, "Sign up failed, please try again."]));
          }
        })
      };
    };

    submitUser();
  }, [user]);

  const navigate = useNavigate();

  const handleInput = (e) => {
    setNewUser({ ...newUser, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpWithGoogle();
  };

  return (
    <div className="sign-up">
      <div className="signup-text">
        <h1>Join us today!</h1>
        <div className="instructions">
        <p className="p1">
          Welcome! Before we get started, please fill out the following form
          with the required information. 
        </p>
        <p className="p2"><strong>Verification Process:</strong></p>
        <ol>
          <li>Shortly after submitting your information, you should receive an email from us with further instructions.
            <ul>
            <li><em>{"If you are signing up to our website on behalf of a senior (you are a family member, caregiver, etc.) please include that information when emailing us back."}</em></li>
            </ul>
          </li>
          <li>Once all of the proper information is submitted, a background check will be done.</li>
          <li>A cleared background check will verify your account so you may begin using our site!</li>
        </ol>
        <p className="p3">It's as simple as 1, 2, 3!</p>
        </div>
      </div>
      <div className="form">
        <Container>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="John"
                  id="firstname"
                  value={newUser.name}
                  onChange={handleInput}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Smith"
                  id="lastname"
                  value={newUser.lastname}
                  onChange={handleInput}
                  required
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  id="dob"
                  value={newUser.dob}
                  onChange={handleInput}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  // disabled
                  type="email"
                  placeholder="johnsmith@gmail.com"
                  id="email"
                  value={newUser.email}
                  onChange={handleInput}
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="124 Faker Lane"
                id="address"
                value={newUser.address}
                onChange={handleInput}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apt 333"
                id="unit"
                value={newUser.unit}
                onChange={handleInput}
              />
            </Form.Group>

            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Bronx"
                  id="city"
                  value={newUser.city}
                  onChange={handleInput}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Select
                  id="state"
                  value={newUser.state}
                  onChange={handleInput}
                  required
                >
                  <option>--Select State--</option>
                  {Object.values(states).map((state) => (
                    <option>{state}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="12345"
                  id="zipcode"
                  value={newUser.zipcode}
                  onChange={handleInput}
                  required
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="1234567890"
                  id="phonenumber"
                  value={newUser.phonenumber}
                  onChange={handleInput}
                  required
                />
              </Form.Group>

              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formBasicVerificationType"
              >
                <Form.Label>Verification Type</Form.Label>
                <Form.Select
                  id="verification_type"
                  value={newUser.verification_type}
                  onChange={handleInput}
                >
                  <option>--Select Option--</option>
                  <option>State ID</option>
                  <option>Passport</option>
                  <option>Drivers Liscense</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label>Preferred Language</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="English"
                  id="languages"
                  value={newUser.languages}
                  onChange={handleInput}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Upload Photo</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="image"
                  id="profilephoto"
                  value={newUser.profilephoto}
                  onChange={handleInput}
                />
                <Form.Text className="text-muted">
                  Please upload a photo in which your face is visible.
                </Form.Text>
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label>User Type</Form.Label>
                <Form.Select
                  id="user_type"
                  value={newUser.user_type}
                  onChange={handleInput}
                  required
                >
                  <option>--Select Option--</option>
                  <option>Senior</option>
                  <option>Volunteer</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <div className="form-button">
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default SignUpPage;

// setAuthErrors([
//   ...authErrors,
//   "User not created in firebase, please try again",
// ]);

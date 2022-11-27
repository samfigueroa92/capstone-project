import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import "./SignUpPage.css";

const SignUpPage = () => {
  const states = {
    "Alabama": "AL",
    "Alaska": "AK",
    "Arizona": "AZ",
    "Arkansas": "AR",
    "California": "CA",
    "Canal Zone": "CZ",
    "Colorado": "CO",
    "Connecticut": "CT",
    "Delaware": "DE",
    "District of Columbia": "DC",
    "Florida": "FL",
    "Georgia": "GA",
    "Guam": "GU",
    "Hawaii": "HI",
    "Idaho": "ID",
    "Illinois": "IL",
    "Indiana": "IN",
    "Iowa": "IA",
    "Kansas": "KS",
    "Kentucky": "KY",
    "Louisiana": "LA",
    "Maine": "ME",
    "Maryland": "MD",
    "Massachusetts": "MA",
    "Michigan": "MI",
    "Minnesota": "MN",
    "Mississippi": "MS",
    "Missouri": "MO",
    "Montana": "MT",
    "Nebraska": "NE",
    "Nevada": "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    "Ohio": "OH",
    "Oklahoma": "OK",
    "Oregon": "OR",
    "Pennsylvania": "PA",
    "Puerto Rico": "PR",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    "Tennessee": "TN",
    "Texas": "TX",
    "Utah": "UT",
    "Vermont": "VT",
    "Virgin Islands": "VI",
    "Virginia": "VA",
    "Washington": "WA",
    "West Virginia": "WV",
    "Wisconsin": "WI",
    "Wyoming": "WY",
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   //logic that will send all the gathered information to the back-end

  // }

  // const handleChange = (e) => {
  //   //logic that will save value from input into a useState
  // }

  return (
    <div className="sign-up">
      <div className="signup-text">
      <h1>Sign Up Today!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <div className="form">
        <Container>
          <Form>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formBasicFirstName"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="John" />
              </Form.Group>

              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formBasicMiddleName"
              >
                <Form.Label>Middle Name</Form.Label>
                <Form.Control type="text" placeholder="Alfred" />
              </Form.Group>

              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formBasicLastName"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Smith" />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formBasicDOB">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" placeholder="YYYY/MM/DD" />
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="johnsmith@gmail.com" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicAddressLine1">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control type="text" placeholder="124 Faker Lane" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddressLine2">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control type="text" placeholder="Apt 333" />
            </Form.Group>

            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formBasicCity">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Bronx" />
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formBasicState">
                <Form.Label>State</Form.Label>
                <Form.Select>
                  <option>--Select State--</option>
                  {Object.values(states).map((state) => (
                    <option>{state}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formBasicZip">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="number" placeholder="12345" />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="1-123-456-7890" />
              </Form.Group>

              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formBasicVerificationType"
              >
                <Form.Label>Verification Type</Form.Label>
                <Form.Select>
                  <option>--Select Option--</option>
                  <option>State ID</option>
                  <option>Passport</option>
                  <option>Drivers Liscense</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row>
            <Form.Group as={Col} className="mb-3" controlId="formBasicPhoto">
              <Form.Label>Upload Photo</Form.Label>
              <Form.Control type="file" placeholder="image" />
              <Form.Text className="text-muted">
                Please upload a photo in which your face is visible.
              </Form.Text>
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="formBasicUser">
                <Form.Label>User Type</Form.Label>
                <Form.Select>
                  <option>--Select Option--</option>
                  <option>Senior</option>
                  <option>Volunteer</option>
                </Form.Select>
              </Form.Group>
            </Row>
          </Form>
        </Container>
      </div>
        <div className="form-button">
        <Button type="submit">
          Submit
        </Button>
        </div>
    </div>
  );
};

export default SignUpPage;

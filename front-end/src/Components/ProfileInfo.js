import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "./ProfileInfo.css"
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

//Component Imports

//CSS Imports

//Cannot be edited: Name, Date of Birth, Email
//Should not be visible: SSN, Verification Type

//Everything else should be visible and a button to Edit info

function ProfileInfo () {
  let { id } = useParams();
  let navigate = useNavigate();

  const states = {
    'Alabama' : 'AL',
    'Alaska' : 'AK',
    'Arizona' : 'AZ',
    'Arkansas' : 'AR',
    'California' : 'CA',
    'Canal Zone' : 'CZ',
    'Colorado' : 'CO',
    'Connecticut' : 'CT',
    'Delaware' : 'DE',
    'District of Columbia' : 'DC',
    'Florida' : 'FL',
    'Georgia' : 'GA',
    'Guam' : 'GU',
    'Hawaii' : 'HI',
    'Idaho' : 'ID',
    'Illinois' : 'IL',
    'Indiana' : 'IN',
    'Iowa' : 'IA',
    'Kansas' : 'KS',
    'Kentucky' : 'KY',
    'Louisiana' : 'LA',
    'Maine' : 'ME',
    'Maryland' : 'MD',
    'Massachusetts' : 'MA',
    'Michigan' : 'MI',
    'Minnesota' : 'MN',
    'Mississippi' : 'MS',
    'Missouri' : 'MO',
    'Montana' : 'MT',
    'Nebraska': 'NE',
    'Nevada' : 'NV',
    'New Hampshire' : 'NH',
    'New Jersey' : 'NJ',
    'New Mexico' : 'NM',
    'New York' : 'NY',
    'North Carolina' : 'NC',
    'North Dakota' : 'ND',
    'Ohio' : 'OH',
    'Oklahoma' : 'OK',
    'Oregon' : 'OR',
    'Pennsylvania' : 'PA',
    'Puerto Rico' : 'PR',
    'Rhode Island': 'RI',
    'South Carolina' : 'SC',
    'South Dakota' : 'SD',
    'Tennessee' : 'TN',
    'Texas' : 'TX',
    'Utah' : 'UT',
    'Vermont' : 'VT',
    'Virgin Islands' : 'VI',
    'Virginia' : 'VA',
    'Washington': 'WA',
    'West Virginia' : 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY'
    }
//"dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "user_type", "state"
  const [user, setUser] = useState({
    firstname: "",
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
      .put(`${API}/users/${id}`, updatedUser) 
      .then(
        () => {
          navigate(`/users/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
    }
 
  const handleTextChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/users/${id}`)
      .then(response => setUser(response.data))
      .catch((error) => console.log("not found")
      );
    }, [id]);

    const handleSubmit = (event) => {
      event.preventDefault();
      updateUser(user, id);
    };

  return (
   /* <div>
        <form>
        <h3>General Information</h3>
        <label>First Name: <input type="text"/></label>
        <label>Last Name: <input type="text"/></label>
        <label>Middle: <input type="text"/></label>

        <h3>Address</h3>
        <label>Address Line 1: <input type="text"/></label>
        <label>Address Line 2: <input type="text"/></label>
        <label>City: <input type="text"/></label>
        <label>State: <select> </select></label>
        <label>City: <input type="text"/></label>
        <button>Next</button>
        </form>
    </div> */
    <div className="profileInfo">
      <Container>
        <h3>General Information</h3>
        <div className="form-profile">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label>First Name</Form.Label>
              <Form.Control disabled
              id="firstname"
              value={user.firstname}
              type="text"
              onChange={handleTextChange} 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control disabled
              id="lastname"
              value={user.lastname}
              type="text"
              onChange={handleTextChange}  
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control disabled
              id="dob"
              value={user.dob}
              type="date"  
              onChange={handleTextChange} 
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Email</Form.Label>
              <Form.Control disabled
              id="email"
              value={user.email}
              type="email"
              onChange={handleTextChange} 
              />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Address</Form.Label>
              <Form.Control 
              id="address"
              value={user.address}
              type="text"
              onChange={handleTextChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>City</Form.Label>
              <Form.Control
              id="city" 
              value={user.city}
              type="text" 
              onChange={handleTextChange} 
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>State</Form.Label>
              <Form.Select value={user.state} onChange={handleTextChange} >
                <option>--Select State--</option>
                {Object.values(states).map(state => <option>{state}</option>)}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
              id="zipcode" 
              value={user.zipcode}
              type="number"
              onChange={handleTextChange} 
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Phone Number</Form.Label>
              <Form.Control 
              id="phonenumber"
              value={user.phonenumber}
              type="tel" 
              onChange={handleTextChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Upload New Photo</Form.Label>
              <Form.Control 
              id="profilephoto"
              value={user.profilephoto}
              type="file"
              onChange={handleTextChange} 
              />
              <Form.Text className="text-muted"> 
              </Form.Text>
            </Form.Group>
            <input type="submit" />
          </Form>
          <Link to={`/users/${id}`}>
        <button>Nevermind!</button>
      </Link>
        </div>
      </Container>
    </div>
  
  )
}

export default ProfileInfo;
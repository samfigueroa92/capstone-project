import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

//Component Imports

//CSS Imports

//Cannot be edited: Name, Date of Birth, Email
//Should not be visible: SSN, Verification Type

//Everything else should be visible and a button to Edit info

const ProfileInfo = () => {
  let { index } = useParams();
  const navigate = useNavigate();
//"dob", "address", "unit", "city", "zipcode", "phonenumber", "email", "profilephoto", "user_type", "state"
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    address: "",
    unit: false,
    city: "",
    zipcode: "",
    phonenumber: "",
    email: "",
    profilephoto: "",
    user_type: "",
    state: "",
  });

  const handleTextChange = (event) => {
    setBookmark({ ...user, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/users/${index}`)
      .then(response => setUser(response.data))
      .catch(error => console.error(error))
    }, []);

    const updateUser = () => {
      axios.put(`${API}/users/${index}`, user) 
        .then(response => {
          setUser(response.data)
          navigate(`/users/${index}`)
        })
        .catch(error => console.error(error))
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      updateUser();
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
          <Form>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMiddleName">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDOB">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date"  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddressLine1">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddressLine2">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text"  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicState">
              <Form.Label>State</Form.Label>
              <Form.Select>
                <option>--Select State--</option>
                {Object.values(states).map(state => <option>{state}</option>)}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicZip">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="number"  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicVerificationType">
              <Form.Label>Verification Type</Form.Label>
              <Form.Select >
                <option>--Select Option--</option>
                <option>State ID</option>
                <option>Passport</option>
                <option>Drivers Liscense</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSSI">
              <Form.Label>Social Security Number</Form.Label>
              <Form.Control type="hidden" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoto">
              <Form.Label>Upload Photo</Form.Label>
              <Form.Control type="file" placeholder="image" />
              <Form.Text className="text-muted">
              
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Edit Info
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  
  )
}

export default ProfileInfo;
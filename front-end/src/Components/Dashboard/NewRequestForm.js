//Dependencies
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./NewRequestForm.css";

//Components
import SidebarNav from "./SidebarNav";

//Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

// API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const NewRequestForm = ({ applicationUser, setDate }) => {
  let navigate = useNavigate();

  // CREATE OR ADD A NEW REQUEST
  const makeRequest = (newRequest) => {
    axios
      .post(`${API}/requests`, {
        ...newRequest,
        elder_id: applicationUser.uuid,
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
    elder_id: "",
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
  };

  return (
    <div className="new-req">
      <SidebarNav setDate={setDate} applicationUser={applicationUser} />
      <Container className="request-form">
        <h3>Submit A Request</h3>
        <Form onSubmit={handleSubmit}>
          <Row>

          <Form.Group as={Col} className="mb-3">
            <Form.Label>Request Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Grocery Pick Up"
              id="title"
              value={request.title}
              onChange={textChange}
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Request Date<span className="required-field">*</span></Form.Label>
            <Form.Control
              type="date"
              id="req_date"
              value={request.req_date}
              onChange={textChange}
            />
          </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Request Description<span className="required-field">*</span></Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              id="description"
              placeholder="Tell us what you need..."
              value={request.description}
              onChange={textChange}
              required
            />
          </Form.Group>
          <Row>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Location<span className="required-field">*</span></Form.Label>
            <Form.Control
              type="text"
              id="location"
              placeholder="123 Somewhere St"
              value={request.location}
              onChange={textChange}
              required
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              id="time"
              placeholder="2pm"
              value={request.time}
              onChange={textChange}
              required
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Request Image</Form.Label>
            <Form.Control
              type="text"
              id="image"
              value={request.image}
              onChange={textChange}
            />
          </Form.Group>
          </Row>
          <div className="form-button">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default NewRequestForm;

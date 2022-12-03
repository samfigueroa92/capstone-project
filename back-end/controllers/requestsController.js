// CONFIGURATIONS
const express = require("express");
const requests = express.Router();

// IMPORTING QUERIES
const {
  getAllRequests,
  getRequest,
  editRequest,
  makeRequest,
  deleteRequest,
  volunteerRequests
} = require("../queries/requests.js");

// BUILDING ROUTES
// INDEX / ALL REQUEST
requests.get("/", async (req, res) => {
  const allRequests = await getAllRequests();
  if (allRequests[0]) {
    res.status(200).json(allRequests);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

// SHOW / SINGLE REQUEST
requests.get("/help_req/:id", async (req, res) => {
  const { id } = req.params;
  const requests = await getRequest(id);
  if (requests) {
    res.json(requests);
  } else {
    res.status(404).json({ error: "not Found" });
  }
});

// SHOW ALL REQUESTS ASSIGNED TO A VOLUNTEER
requests.get("/my_requests", async (req, res) => {
  try {
    console.log("Showing all requests for volunteer " + req.body.uuid)
    const uuid = req.body.uuid;
    const requests = await volunteerRequests(uuid);
    res.json(requests);
  } catch (error) {
    return error;
  }
});

// ASSIGN VOLUNTEER TO REQUEST
requests.put("/", async (req, res) => {});

// CREATE OR MAKE A REQUEST
requests.post("/", async (req, res) => {
  try {
    const createdRequest = await makeRequest(req.body);
    res.json(createdRequest);
  } catch (error) {
    return error;
  }
});

// UPDATE OR EDIT A REQUEST
requests.put("/edit_req/:id", async (req, res) => {
  const { id } = req.params;
  const editedRequest = await editRequest(req.body, id);
  if (editedRequest.id) {
    res.status(200).json(editedRequest);
  } else {
    res.status(400).json({ error: "Your request was not updated" });
  }
});

// DELETE A REQUEST
requests.delete("/delete_req/:id", async (req, res) => {
  const { id } = req.params;
  const deletedRequest = await deleteRequest(id);
  if (deletedRequest.id) {
    res.status(200).json(deletedRequest);
  } else {
    res.status(404).json("Request not found!");
  }
});

module.exports = requests;

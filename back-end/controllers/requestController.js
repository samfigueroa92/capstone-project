// CONFIGURATIONS
const e = require("express");
const express = require("express");
const request = express.Router();

// IMPORTING QUERIES
const {
  getAllRequests,
  getRequest,
  editRequest,
  makeRequest,
  deleteRequest,
} = require("../queries/request.js");

// BUILDING ROUTES
// INDEX / ALL REQUEST
request.get("/", async (req, res) => {
  const allRequest = await getAllRequests();
  if (allRequests[0]) {
    res.status(200).json(allRequests);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

// SHOW / SINGLE REQUEST
request.get("/:id", async (req, res) => {
  const { id } = req.params;
  const requests = await getRequest(id);
  if (requests) {
    res.json(requests);
  } else {
    res.status(404).json({ error: "not Found" });
  }
});

// CREATE OR MAKE A REQUEST
request.post("/", async (req, res) => {
  try {
    const createdRequest = await makeRequest(req.body);
    res.json(createdRequest);
  } catch (error) {
    return error;
  }
});

// UPDATE OR EDIT A REQUEST
request.put("/:id", async (req, res) => {
  const { id } = req.params;
  const editedRequest = await editRequest(req.body, id);
  if (editedRequest.id) {
    res.status(200).json(editedRequest);
  } else {
    res.status(400).json({ error: "Your request was not updated" });
  }
});

// DELETE A REQUEST
request.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedRequest = await deleteRequest(id);
  if (deletedRequest.id) {
    res.status(200).json(deletedRequest);
  } else {
    res.status(404).json("Request not found!");
  }
});

module.exports = request;
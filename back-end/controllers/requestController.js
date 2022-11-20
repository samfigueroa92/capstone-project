// CONFIGURATIONS 
const e = require("express");
const express = require("express");
const request = express.Router();


// IMPORTING QUERIES
const {
    getAllRequests, 
    getRequest,
    editRequest
} = require("../queries/request.js");


// BUILDING ROUTES
// INDEX / ALL REQUEST
request.get("/", async (req, res) => {
    const allRequest = await getAllRequests();
    if (allRequest[0]) {
        res.status(200).json(allRequest);
    } else {
        res.status(500).json({ error: "server error!"});
    }
});

// SHOW / SINGLE REQUEST
request.get("/:id", async (req, res) => {
    const { id } = req.params;
    const requests = await getRequest(id);
    if(requests) {
        res.json(requests);
    } else {
        res.status(404).json({ error: "not Found"});
    }
});

// UPDATE OR EDIT A REQUEST
request.put("/:id", async (req, res) => {
    const { id } = req.params;
    const editedRequest = await editRequest(req.body, id);
    if(editRequest.id) {
        res.status(200).json(editRequest);
    } else {
        res.status(400).json({ error: "Your request was not updated"})
    }
})







module.exports = request;
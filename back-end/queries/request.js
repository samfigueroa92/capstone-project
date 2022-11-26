const db = require("../db/dbConfig.js");

// Index --- all posted requests *** This should only show OPEN requests ***
const getAllRequests = async () => {
  try {
    console.log("Listing all posted requests");
    const requests = await db.any(
      "SELECT * FROM requests ORDER BY req_date ASC"
    ); // Lists requests by their date, ascending
    return requests;
  } catch (error) {
    return error;
  }
};

// --Routes--

//Create request
const makeRequest = async (request) => {
  try {
    console.log("Adding request to database");
    request = await db.one(
      "INSERT INTO requests (elder, description, req_date, location, time) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        request.elder,
        request.description,
        request.req_date,
        request.location,
        request.time,
      ]
    );
    return request;
  } catch (error) {
    return error;
  }
};

//Single request
const getRequest = async (id) => {
  try {
    console.log("Retreiving request from request table");
    const req = await db.one("SELECT * FROM requests WHERE id=$1", id);
    return req;
  } catch (error) {
    return error;
  }
};

//Edit Request
const editRequest = async (request, id) => {
  try {
    console.log("Editing request with id of " + id);
    const req = await db.one(
      "UPDATE requests SET elder=$1, volunteer=$2, req_date=$3, description=$4, location=$5, time=$6, assigned=$7 WHERE id=$8 RETURNING *",
      [
        request.elder,
        request.volunteer,
        request.req_date,
        request.description,
        request.location,
        request.time,
        request.assigned,
        id,
      ]
    );
    return req;
  } catch (error) {
    return error;
  }
};

//Update Request - Assign Volunteer, mark request assigned as TRUE
const assignVolunteer = async (request, volunteer) => {
  try {
    console.log(`Assigning volunteer ${volunteer.id} to request ${request.id}`);
    const assign = await db.one(
      "UPDATE requests SET volunteer=$1, assigned=$2 WHERE id=$3 RETURNING *",
      [volunteer.id, "TRUE", request.id]
    );
    return assign;
  } catch (error) {
    return error;
  }
};

//Update Request - Remove Volunteer, mark request assigned as FALSE
const removeVolunter = async (id) => {
  try {
    console.log("Removing volunteer from request");
    const unAssign = await db.one(
      "UPDATE requests SET volunteer=$1, assigned=$2 WHERE id=$3 RETURNING *",
      [NULL, "FALSE", id]
    );
    return unAssign;
  } catch (error) {
    return error;
  }
};

//Delete Request
const deleteRequest = async (id) => {
  try {
    console.log("Deleting request with id of " + id);
    const request = await db.one(
      "DELETE FROM requests WHERE id=$1 RETURNING *",
      id
    );
    return request;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllRequests,
  getRequest,
  editRequest,
  makeRequest,
  deleteRequest,
};

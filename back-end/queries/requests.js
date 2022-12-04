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

// Get all requests that are currently unassigned
const openRequests = async () => {
  try {
    console.log("Listing all open requests");
    requests = await db.any(
      "SELECT * FROM requests WHERE assigned=FALSE ORDER BY req_date ASC"
    );
    return requests;
  } catch (error) {
    return error;
  }
};

//Create request
const makeRequest = async (request) => {
  try {
    console.log("Adding request to database");
    request = await db.one(
      "INSERT INTO requests (elder_id, description, req_date, location, time, title, image) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        request.elder_id,
        request.description,
        request.req_date,
        request.location,
        request.time,
        request.title,
        request.image,
      ]
    );
    return request;
  } catch (error) {
    return error;
  }
};

//Single request
//Looking at this makes me think - we'll probably need some helper functions to validate that a person is able to review this request,
// at least from a volunteer side. A query that checks to see if the users firebase_id is in the row they are attempting to look at,
// and if so, the request info is sent back. At least for the future - not necessarily important to have in for the short term.

const getRequest = async (id) => {
  try {
    console.log("Retreiving request from request table");
    const request = await db.one("SELECT * FROM requests WHERE id=$1", id);
    return request;
  } catch (error) {
    return error;
  }
};

// Listing of a volunteers requests
const volunteerRequests = async (uuid) => {
  try {
    console.log(`Retreiving assigned requests for user ${uuid}`);
    const requests = await db.any(
      "SELECT * FROM requests WHERE volunteer_id=$1 ORDER BY req_date ASC",
      uuid
    );
    return requests;
  } catch (error) {
    return error;
  }
};

// Listing of a senior's requests
const seniorRequests = async (uuid) => {
  try {
    console.log(`Retreiving posted requests by user ` + uuid);
    const requests = await db.any(
      "SELECT * FROM requests WHERE elder_id=$1",
      uuid
    );
    return requests;
  } catch (error) {
    return error;
  }
};

//Edit Request
const editRequest = async (request, id) => {
  try {
    console.log("Editing request with id of " + id);
    const req = await db.one(
      "UPDATE requests SET elder_id=$1, volunteer_id=$2, req_date=$3, description=$4, location=$5, time=$6, assigned=$7 WHERE id=$8 RETURNING *",
      [
        request.elder_id,
        request.volunteer_id,
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
const removeVolunteer = async (id) => {
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
  openRequests,
  editRequest,
  makeRequest,
  deleteRequest,
  volunteerRequests,
  seniorRequests,
  assignVolunteer,
  removeVolunteer,
};

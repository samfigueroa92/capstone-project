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
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllRequests,
  getRequest, 
  editRequest
};

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
const editRequest = async (user, id) => {
    try {
        console.log("Editing request with id of " + id);
        const req = await db.one ("UPDATE users SET firstname=$1, lastname=$2, dob=$3, address=$4, unit=$5, city=$6, state=$7, zipcode=$8, phonenumber=$9, email=$10, verified=$11, user_type=$12, profilephoto=$13, languages=$14 WHERE id=$15 RETURNING *",
        [
            
        ]
        )
    } catch (error) {
        return error;
    }
}

module.exports = {};

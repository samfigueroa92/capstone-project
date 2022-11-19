const db = require("../db/dbConfig.js");


// Index --- all posted requests *** This should only show OPEN requests ***
const getAllRequests = async () => {
    try {
        console.log("Listing all posted requests");
        const requests = await db.any("SELECT * FROM requests ORDER BY req_date ASC") // Lists requests by their date, ascending
        return requests;        
    } catch (error) {
        return error;
    }
}






module.exports = {};
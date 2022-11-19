const db = require("../db/dbConfig.js");

//Index -- all users
const getAllUsers = async () => {
    try {
        console.log("Listing all users from the users table");
        const users = await db.any("SELECT * FROM users ORDER BY id ASC");
        return users;
    } catch (error) {
        return error;
    }
};

// --Routes--

//Single user
const getUser = async(id) => {
    try {
        console.log("Retreiving user from table users");
        const user = await db.one("SELECT * FROM users WHERE id=$1", id);
        return user;
    } catch (error) {
        return error;
    }
};






module.exports = {};
const db = require("../db/dbConfig.js");

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
const getUser = async (id) => {
  try {
    console.log("Retreiving user from table users");
    const user = await db.one("SELECT * FROM users WHERE id=$1", id);
    return user;
  } catch (error) {
    return error;
  }
};

//Create user (backburner while we learn how the hell firebase works)

//Delete user - requires admin auth
const deleteUser = async (id) => {
  console.log("Removing user " + id);
  try {
    const user = await db.one("DELETE FROM users WHERE id=$1 RETURNING *", id);
    return user;
  } catch (error) {
    return error;
  }
};

//Edit user (?)
const editUser = async (user, id) => {
  try {
    console.log("Editing user with id of " + id);
    const req = await db.one(
      "UPDATE users SET firstname=$1, lastname=$2, dob=$3, address=$4, unit=$5, city=$6, state=$7, zipcode=$8, phonenumber=$9, email=$10, verified=$11, user_type=$12, profilephoto=$13, languages=$14 WHERE id=$15 RETURNING *",
      [
        user.firstname,
        user.lastname,
        user.dob,
        user.address,
        user.unit,
        user.city,
        user.state,
        user.zipcode,
        user.telephonenumber,
        user.email,
        user.verified,
        user.user_type,
        user.profilephoto,
        user.languages,
      ]
    );
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUsers,
  getUser,
  deleteUser,
  editUser,
};

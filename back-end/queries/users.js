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
const getUser = async (fb_uid) => {
  try {
    console.log("Retreiving user from table users");
    const user = await db.one(
      "SELECT * FROM users WHERE firebase_id=$1",
      fb_uid
    );
    return user;
  } catch (error) {
    return error;
  }
};

const newUser = async (user) => {
  console.log("Adding new user to the DB");
  try {
    user = await db.one(
      "INSERT INTO users (firebase_id, firstname, lastname, dob, address, unit, city, state, zipcode, phonenumber, email, user_type, profile_photo, languages, SSN, verification_type) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *",
      [
        user.firebase_id,
        user.firstname,
        user.lastname,
        user.dob,
        user.address,
        user.unit,
        user.city,
        user.state,
        user.zipcode,
        user.phonenumber,
        user.email,
        user.user_type,
        user.profile_photo,
        user.languages,
        user.SSN,
        user.verification_type,
      ]
    );
  } catch (error) {
    return error;
  }
};

//Delete user - requires admin auth
const deleteUser = async (fb_uid) => {
  console.log("Removing user " + fb_uid);
  try {
    const user = await db.one(
      "DELETE FROM users WHERE id=$1 RETURNING *",
      fb_uid
    );
    return user;
  } catch (error) {
    return error;
  }
};

//Edit user - profile details and such. Not all of these should be accessible to the user. For instance
const editUser = async (user, fb_uid) => {
  try {
    console.log("Editing user with id of " + fb_uid);
    const req = await db.one(
      "UPDATE users SET firstname=$1, lastname=$2, dob=$3, address=$4, unit=$5, city=$6, state=$7, zipcode=$8, phonenumber=$9, profilephoto=$13, languages=$14 WHERE id=$15 RETURNING *",
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
  newUser,
};

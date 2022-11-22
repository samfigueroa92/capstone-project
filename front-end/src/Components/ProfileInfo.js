import React from 'react'

//Component Imports

//CSS Imports
import "./ProfileInfo.css"

const ProfileInfo = () => {
  return (
    <div>
        <form>
        <h3>General Information</h3>
        <label>First Name: <input type="text"/></label>
        <label>Last Name: <input type="text"/></label>
        <label>Middle: <input type="text"/></label>

        <h3>Address</h3>
        <label>Address Line 1: <input type="text"/></label>
        <label>Address Line 2: <input type="text"/></label>
        <label>City: <input type="text"/></label>
        <label>State: <select> </select></label>
        <label>City: <input type="text"/></label>
        <button>Next</button>
        </form>
    </div>
  )
}

export default ProfileInfo

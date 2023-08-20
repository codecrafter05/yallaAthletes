import React, { useState, useEffect } from "react";
import { updateUserProfile } from "../../utilities/users-api";

export default function EditUserProfile({ user, setUser }) {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSaveChanges = async () => {
    try {
      const updatedUser = await updateUserProfile(editedUser);
      setUser(updatedUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Edit User Profile</h1>
      <label>First Name: </label>
      <input
        type="text"
        name="firstName"
        value={editedUser.firstName}
        onChange={handleInputChange}
      />
      <label>Last Name: </label>
      <input
        type="text"
        name="lastName"
        value={editedUser.lastName}
        onChange={handleInputChange}
      />
      <label>Email: </label>
      <input
        type="email"
        name="email"
        value={editedUser.email}
        onChange={handleInputChange}
      />
      <label>Gender: </label>
      <input
        type="text"
        name="gender"
        value={editedUser.gender}
        onChange={handleInputChange}
      />
      <label>Date of Birth: </label>
      <input
        type="date"
        name="dateOfBirth"
        value={editedUser.dateOfBirth}
        onChange={handleInputChange}
      />
      <label>Nationality: </label>
      <input
        type="text"
        name="nationality"
        value={editedUser.nationality}
        onChange={handleInputChange}
      />
      <label>Phone: </label>
      <input
        type="text"
        name="phone"
        value={editedUser.phone}
        onChange={handleInputChange}
      />
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
}

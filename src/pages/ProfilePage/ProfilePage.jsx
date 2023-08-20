import React, { useState, useEffect } from 'react';
import * as usersService from '../../utilities/users-service'; 

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      try {
        const userData = await usersService.getUser();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    getUser();
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      <hr/>
      {user && (
        <div>
          <h2>{user.firstName} {user.lastName}'s Profile</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Gender: {user.gender}</p>
          <p>Date of Birth: {user.dateOfBirth}</p>
          <p>Nationality: {user.nationality}</p>
          {/* Display other user details here */}
        </div>
      )}
    </div>
  );
}

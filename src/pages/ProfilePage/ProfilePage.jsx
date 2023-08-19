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
          <h2>{user.name}'s Profile</h2>
          <p>Email: {user.email}</p>
          {/* Display other user details here */}
        </div>
      )}
    </div>
  );
}

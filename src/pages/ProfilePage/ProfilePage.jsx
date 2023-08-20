import React, { useState, useEffect } from 'react';
import * as usersService from '../../utilities/users-service'; 

export default function ProfilePage({user}) {

  return (
    <div>
    { user.role === 'Customer' || 'Athlete' || 'Manager' || 'Admin' ? <h1>Profile Details Page</h1> : <h1>Error</h1>}
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

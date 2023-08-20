import React, { useState, useEffect } from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import BecomeAthlete from '../../components/BecomeAthlete/BecomeAthlete';
import EditUserProfile from '../../components/EditUserProfile/EditUserProfile';
import { getAthlete } from '../../utilities/athletes-service';
import { Container } from '@mui/material';
import Alert from '@mui/material/Alert';

export default function ProfilePage({ user }) {
  const [showBecomeAthlete, setShowBecomeAthlete] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [athleteStatus, setAthleteStatus] = useState('');

  useEffect(() => {
    const fetchUserAthleteStatus = async () => {
      try {
        const athlete = await getAthlete(user._id);
        setAthleteStatus(athlete.status);
      } catch (error) {
        console.log('Response ==>', error.response);
      }
    };

    fetchUserAthleteStatus();
  }, [user._id]);

  return (
    <Container>
      <h1>Profile</h1>
      <hr />
      {athleteStatus === 'Pending' && (
        <Alert severity="warning">Your athlete status is pending</Alert>
      )}

      {user.role === 'Athlete' && athleteStatus === 'Approved' && (
        <Alert severity="success">Your athlete status is approved</Alert>
      )}

      {user.role === 'Athlete' && athleteStatus === 'Rejected' && (
        <Alert severity="error">Your athlete status is rejected</Alert>
      )}

      {showEditProfile ? (
        <EditUserProfile user={user} />
      ) : showBecomeAthlete ? (
        <BecomeAthlete user={user} />
      ) : (
        <UserProfile user={user} />
      )}

      {showEditProfile ? (
        <button onClick={() => setShowEditProfile(false)}>Cancel Edit</button>
      ) : (
        <>
          {user.role !== 'Athlete' && athleteStatus !== 'Pending' && athleteStatus !== 'Approved' && (
            <button onClick={() => setShowBecomeAthlete(!showBecomeAthlete)}>
              {showBecomeAthlete ? 'Back to Profile' : 'Become Athlete'}
            </button>
          )}

          <button onClick={() => setShowEditProfile(true)}>
            Edit Profile
          </button>
        </>
      )}

    </Container>
  );
}
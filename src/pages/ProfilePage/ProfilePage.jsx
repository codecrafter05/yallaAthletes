import { useState, useEffect } from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import BecomeAthlete from '../../components/BecomeAthlete/BecomeAthlete';
import { getAthlete } from '../../utilities/athletes-service';
import Alert from '@mui/material/Alert';

export default function ProfilePage({user}) {
  console.log('User prop:', user); 
  const [showBecomeAthlete, setShowBecomeAthlete] = useState(false);
  const [athleteStatus, setAthleteStatus] = useState('');

  useEffect(() => {
    const fetchUserAthleteStatus = async () => {
      try {
        console.log(user._id);
        const athlete = await getAthlete();
        console.log('athlete ==>', athlete);
        setAthleteStatus(athlete.status);
      } catch (error) {
        console.log('Response ==>', error.response);
      }
    };
  
    fetchUserAthleteStatus();
  }, [user._id]);
  

  return (
    <>
      <h1>{user.role} Details Page</h1>
      <hr />
      {user.role === 'Athlete' && athleteStatus === 'Pending' && (
        <Alert severity="warning">Your athlete status is pending</Alert>
      )}

      {user.role === 'Athlete' && athleteStatus === 'Approved' && (
        <Alert severity="success">Your athlete status is approved</Alert>
      )}

      {user.role === 'Athlete' && athleteStatus === 'Rejected' && (
        <Alert severity="error">Your athlete status is rejected</Alert>
      )}


      {showBecomeAthlete ? (
        <BecomeAthlete user={user} />
      ) : (
        <UserProfile user={user} />
      )}


      {user.role !== 'Athlete' && athleteStatus !== 'Pending' && athleteStatus !== 'Approved' && ( 
        <button onClick={() => setShowBecomeAthlete(!showBecomeAthlete)}>
          {showBecomeAthlete ? 'View Profile' : 'Become Athlete'}
        </button>
      )}
    </>
  );

}

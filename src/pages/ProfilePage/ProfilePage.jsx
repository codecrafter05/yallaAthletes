import React, { useState, useEffect } from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import BecomeAthlete from '../../components/BecomeAthlete/BecomeAthlete';
import EditUserProfile from '../../components/EditUserProfile/EditUserProfile';
import { getAthlete, deleteAthlete } from '../../utilities/athletes-service';
import { getUser, deleteUser } from "../../utilities/users-service";
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Alert from '@mui/material/Alert';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ProfilePage() {
  const [showBecomeAthlete, setShowBecomeAthlete] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [athleteStatus, setAthleteStatus] = useState('');
  const [user, setUser] = useState(getUser());
  const [athleteUpgrade, setAthleteUpgrade] = useState(false);

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [confirmationAction, setConfirmationAction] = useState(null);

  useEffect(() => {
    console.log(`useEffect user...`);
    
    async function fetchUserData() {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  
    fetchUserData();
  }, [athleteUpgrade]);
  
  useEffect(() => {
    const fetchUserAthleteStatus = async () => {
      try {
        const athlete = await getAthlete(user._id);
        setAthleteStatus(athlete.status);
      } catch (error) {
        console.log('Error fetching athlete status:', error.response);
      }
    };
  
    if (user && user._id) {
      fetchUserAthleteStatus();
    }
  }, [user]);
   

  const handleDeleteUser = () => {
    setConfirmationAction('deleteUser');
    setShowConfirmationModal(true);
  };

  const handleConfirmDeletion = async () => {
    if (confirmationAction === 'deleteUser') {
      try {
        // Delete athlete schema if it exists
        if (athleteStatus === 'Approved' || athleteStatus === 'Rejected' || athleteStatus === 'Pending') {
          await deleteAthlete(); // Added optional chaining
        }
        // Remove token from storage (log out the user)
        localStorage.removeItem('token');

        // Redirect user to the desired page after successful deletion
        // For example, redirect to the home page
        window.location.href = '/'; // Change the URL as needed
        // Delete user
        await deleteUser(); // Added optional chaining

        // Perform necessary actions after deletion, e.g., log out or redirect
      } catch (error) {
        // Handle error
      }
    }

    // Close the confirmation modal
    setShowConfirmationModal(false);
  };

  const handleCancelDeletion = () => {
    // Close the confirmation modal
    setShowConfirmationModal(false);
  };

  const handleBecomeAthlete = () => {
    console.log(`handleBecomeAthlete`)
    setShowBecomeAthlete(false);
    setShowEditProfile(false);
    setAthleteUpgrade(true);
    console.log(`showEditProfile ==> ${showEditProfile}`)
    console.log(`showBecomeAthlete ==> ${showBecomeAthlete}`)
  };

  console.log(`re-rendering...`);
  console.log(`showEditProfile ==> ${showEditProfile}`)
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
        <EditUserProfile user={user} setUser={setUser} />
      ) : showBecomeAthlete ? (
        <BecomeAthlete user={user} handleBecomeAthlete={handleBecomeAthlete}/>
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
      <button onClick={handleDeleteUser}>Delete User</button> {/* Added delete button */}
      
      {/* Confirmation Modal */}
      <Modal open={showConfirmationModal} onClose={handleCancelDeletion}>
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2">
            Confirm Deletion
          </Typography>
          <hr />
          <Typography sx={{ mt: 2, mb: 4 }}>
            Are you sure you want to delete your account?
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" sx={{ mr: 1 }} onClick={handleConfirmDeletion} color='error'>Confirm</Button>
            <Button variant="contained" onClick={handleCancelDeletion}>Cancel</Button>
          </div>
        </Box>
      </Modal>

    </Container>
  );
}

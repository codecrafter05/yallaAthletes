import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import DashboardPage from '../DashboardPage';
import { getAllAthletesFiltered, approveAthlete, rejectAthlete, removeAthlete } from '../../../utilities/athletes-service';

export default function AthletesPageDashboard({user, setUser}) {
  const [pendingAthletes, setPendingAthletes] = useState([]);
  const [approvedAthletes, setApprovedAthletes] = useState([]);
  const [rejectedAthletes, setRejectedAthletes] = useState([]);
  
  const pendingAthletesColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'firstName', headerName: 'First name', sortable: false, width: 160 },
    { field: 'lastName', headerName: 'Last name', sortable: false, width: 160 },
    { field: 'age', headerName: 'Age', type: 'number', width: 120 },
    { field: 'status', headerName: 'Status', sortable: false, width: 130 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => renderActions('Pending', params.row.athleteId),
    },
  ];
  
  const approvedAthletesColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'firstName', headerName: 'First name', sortable: false, width: 160 },
    { field: 'lastName', headerName: 'Last name', sortable: false, width: 160 },
    { field: 'age', headerName: 'Age', type: 'number', width: 120 },
    { field: 'status', headerName: 'Status', sortable: false, width: 130 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => renderActions(params.row.status, params.row.athleteId),
    },
  ];
  
  const rejectedAthletesColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'firstName', headerName: 'First name', sortable: false, width: 160 },
    { field: 'lastName', headerName: 'Last name', sortable: false, width: 160 },
    { field: 'age', headerName: 'Age', type: 'number', width: 120 },
    { field: 'status', headerName: 'Status', sortable: false, width: 130 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => renderActions(params.row.status, params.row.athleteId),
    },
  ];

  async function fetchAthletes() {
    try {
      const pendingAthletes = await getAllAthletesFiltered('Pending'); // Fetch pending athletes
      const approvedAthletes = await getAllAthletesFiltered('Approved'); // Fetch approved athletes
      const rejectedAthletes = await getAllAthletesFiltered('Rejected'); // Fetch rejected athletes
      
      setPendingAthletes(pendingAthletes); // Update the state with pending athletes' data
      setApprovedAthletes(approvedAthletes); // Update the state with approved athletes' data
      setRejectedAthletes(rejectedAthletes); // Update the state with rejected athletes' data
    } catch (error) {
      console.error('Error fetching athletes:', error);
    }
  }

  useEffect(() => {
    fetchAthletes();
  }, []);

  const handleApprove = async (athleteId) => {
    try {
      await approveAthlete(athleteId);
      fetchAthletes();
    } catch (error) {
      console.error('Error approving athlete:', error);
    }
  };

  const handleReject = async (athleteId) => {
    try {
      await rejectAthlete(athleteId);
      fetchAthletes();
    } catch (error) {
      console.error('Error rejecting athlete:', error);
    }
  };

  const handleRemove = async (athleteId) => {
    try {
      await removeAthlete(athleteId);
      fetchAthletes();
    } catch (error) {
      console.error('Error removing athlete:', error);
    }
  };
  
  const renderActions = (status, id) => {
    if (status === 'Pending') {
      return (
        <>
          <Button variant="contained" color="success"
            onClick={() => handleApprove(id)}
          >
            Approve
          </Button>
          <Button variant="contained" color="error" sx={{ marginLeft: '10px' }}
            onClick={() => handleReject(id)}
          >
            Reject
          </Button>
        </>
      );
    } else {
      return (
        <Button variant="contained" color="error"
          onClick={() => handleRemove(id)}
        >
          Remove
        </Button>
      );
    }
  };

  const calculateAge = (dateOfBirth) => {
    const dob = new Date(dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      return age - 1;
    }
    return age;
  };

  const pendingAthletesRows = pendingAthletes.map((athlete, index) => ({
    id: index + 1,
    firstName: athlete.user.firstName,
    lastName: athlete.user.lastName,
    age: calculateAge(athlete.user.dateOfBirth),
    fullName: `${athlete.firstName || ''} ${athlete.lastName || ''}`,
    status: athlete.status,
    athleteId: athlete._id,
  }));

  const approvedAthletesRows = approvedAthletes.map((athlete, index) => ({
    id: index + 1,
    firstName: athlete.user.firstName,
    lastName: athlete.user.lastName,
    age: calculateAge(athlete.user.dateOfBirth),
    fullName: `${athlete.firstName || ''} ${athlete.lastName || ''}`,
    status: athlete.status,
    athleteId: athlete._id,
  }));

  const rejectedAthletesRows = rejectedAthletes.map((athlete, index) => ({
    id: index + 1,
    firstName: athlete.user.firstName,
    lastName: athlete.user.lastName,
    age: calculateAge(athlete.user.dateOfBirth),
    fullName: `${athlete.firstName || ''} ${athlete.lastName || ''}`,
    status: athlete.status,
    athleteId: athlete._id,
  }));

  return (
    <Container>
      <Box sx={{ marginTop: '20px', marginBottom: '20px' }}>
        <DashboardPage user={user} setUser={setUser} />
        <h1>Athletes</h1>
        <hr />

        {/* DataGrid */}
        <h2>Pending athletes</h2>
        
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={pendingAthletesRows} // Use the pendingAthletes state here
            columns={pendingAthletesColumns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>

        <h2>Approved athletes</h2>
        
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={approvedAthletesRows} // Use the pendingAthletes state here
            columns={approvedAthletesColumns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>

        <h2>Rejected athletes</h2>
        
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rejectedAthletesRows} // Use the pendingAthletes state here
            columns={rejectedAthletesColumns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </Box>
    </Container>
  );
}
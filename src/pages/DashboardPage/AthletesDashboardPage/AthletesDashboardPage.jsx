import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import DashboardPage from '../DashboardPage';
import { getAllAthletesFiltered } from '../../../utilities/athletes-service';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

export default function AthletesPageDashboard() {
  const [pendingAthletes, setPendingAthletes] = useState([]);

  useEffect(() => {
    async function fetchPendingAthletes() {
      try {
        const response = await getAllAthletesFiltered('Approved'); // Fetch pending athletes
        console.log('Fetched pending athletes:', response);
        setPendingAthletes(response); // Update the state with pending athletes' data
      } catch (error) {
        console.error('Error fetching pending athletes:', error);
      }
    }

    fetchPendingAthletes();
  }, []);

  const rows = pendingAthletes.map((athlete, index) => ({
    id: index,
    firstName: athlete.user.firstName,
    lastName: athlete.user.lastName,
    age: athlete.age,
    fullName: `${athlete.firstName || ''} ${athlete.lastName || ''}`,
  }));

  return (
    <>
      <Box sx={{ marginLeft: '150px', marginTop: '2px' }}>
        <DashboardPage />
        <h1>Athletes</h1>
        <hr />

        {/* DataGrid */}
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows} // Use the pendingAthletes state here
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </Box>
    </>
  );
}

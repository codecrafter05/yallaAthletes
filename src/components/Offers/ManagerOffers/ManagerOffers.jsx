import { useEffect, useState } from "react";
import { getAllManagerOffers } from "../../../utilities/offers-service";
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';

export default function ManagerOffers ({ user }) {
  const [pendingOffers, setPendingOffers] = useState([]);
  const [acceptedOffers, setAcceptedOffers] = useState([]);
  const [rejectedOffers, setRejectedOffers] = useState([]);

  useEffect(() => {
    async function fetchOffers() {
      try {
        const pendingOffers = await getAllManagerOffers(user._id, 'Pending');
        const acceptedOffers = await getAllManagerOffers(user._id, 'Accepted');
        const rejectedOffers = await getAllManagerOffers(user._id, 'Rejected');

        setPendingOffers(pendingOffers);
        setAcceptedOffers(acceptedOffers);
        setRejectedOffers(rejectedOffers);
      } catch(err) {
        console.log(`Error displaying Offers: ${err}`);
      }
    }
    fetchOffers();
  }, [user._id]);

  const pendingOffersColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'athleteName',
      headerName: 'Athlete Name',
      sortable: true,
      width: 160,
    },
    { field: 'athleteAge', headerName: 'Age', type: 'number', width: 120 },
    { field: 'sportType', headerName: 'Sport Type', sortable: false, width: 130 },
    { field: 'bid', headerName: 'Offer', sortable: false, width: 130 },
    {
      field: 'managerName',
      headerName: 'Manager Name',
      sortable: false,
      width: 130,
      valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const acceptedOffersColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'athleteName',
      headerName: 'Athlete Name',
      sortable: true,
      width: 160,
    },
    { field: 'athleteAge', headerName: 'Age', type: 'number', width: 120 },
    { field: 'sportType', headerName: 'Sport Type', sortable: false, width: 130 },
    { field: 'bid', headerName: 'Offer', sortable: false, width: 130 },
    { field: 'email', headerName: 'Contact', sortable: false, width: 200 },
    {
      field: 'managerName',
      headerName: 'Manager Name',
      sortable: false,
      width: 130,
      valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const rejectedOffersColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'athleteName',
      headerName: 'Athlete Name',
      sortable: true,
      width: 160,
    },
    { field: 'athleteAge', headerName: 'Age', type: 'number', width: 120 },
    { field: 'sportType', headerName: 'Sport Type', sortable: false, width: 130 },
    { field: 'bid', headerName: 'Offer', sortable: false, width: 130 },
    {
      field: 'managerName',
      headerName: 'Manager Name',
      sortable: false,
      width: 130,
      valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const pendingOffersRows = pendingOffers.map((offer, index) => ({
    id: index + 1,
    athleteName: offer.athleteName,
    athleteAge: offer.athleteAge,
    sportType: offer.sportType,
    firstName: offer.user.firstName,
    lastName: offer.user.lastName,
    bid: offer.bid,
    fullName: `${offer.user.firstName || ''} ${offer.user.lastName || ''}`,
    status: offer.status,
  }));

  const acceptedOffersRows = acceptedOffers.map((offer, index) => ({
    id: index + 1,
    athleteName: offer.athleteName,
    athleteAge: offer.athleteAge,
    sportType: offer.sportType,
    firstName: offer.user.firstName,
    lastName: offer.user.lastName,
    bid: offer.bid,
    email: offer.athleteEmail,
    fullName: `${offer.user.firstName || ''} ${offer.user.lastName || ''}`,
    status: offer.status,
  }));

  const rejectedOffersRows = rejectedOffers.map((offer, index) => ({
    id: index + 1,
    athleteName: offer.athleteName,
    athleteAge: offer.athleteAge,
    sportType: offer.sportType,
    firstName: offer.user.firstName,
    lastName: offer.user.lastName,
    bid: offer.bid,
    fullName: `${offer.user.firstName || ''} ${offer.user.lastName || ''}`,
    status: offer.status,
  }));

  if(user.role !== 'Manager') { 
    return (
      <Container>
        <Box sx={{ marginTop: '20px', marginBottom: '20px' }}>
          <h1>You are not authorized to view this page.</h1>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Box sx={{ marginTop: '20px', marginBottom: '20px' }}>
        {/* DataGrid */}
        <h2>Pending offers</h2>
        
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={pendingOffersRows} // Use the pendingAthletes state here
            columns={pendingOffersColumns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>

        <h2>Accepted offers</h2>
        
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={acceptedOffersRows} // Use the pendingAthletes state here
            columns={acceptedOffersColumns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>

        <h2>Rejected offers</h2>
        
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rejectedOffersRows} // Use the pendingAthletes state here
            columns={rejectedOffersColumns}
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
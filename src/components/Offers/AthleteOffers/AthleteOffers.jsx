import { useEffect, useState } from "react";
import { getAllAthleteOffers, approveOffer, rejectOffer, removeOffer } from "../../../utilities/offers-service";
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import Container from '@mui/material/Container';

export default function AthleteOffers ({ user }) {
  const [pendingOffers, setPendingOffers] = useState([]);
  const [acceptedOffers, setAcceptedOffers] = useState([]);
  const [rejectedOffers, setRejectedOffers] = useState([]);

  const fetchOffers = async () => {
    try {
      const pendingOffers = await getAllAthleteOffers(user._id, 'Pending');
      const acceptedOffers = await getAllAthleteOffers(user._id, 'Accepted');
      const rejectedOffers = await getAllAthleteOffers(user._id, 'Rejected');

      setPendingOffers(pendingOffers);
      setAcceptedOffers(acceptedOffers);
      setRejectedOffers(rejectedOffers);
    } catch(err) {
      console.log(`Error displaying Offers: ${err}`);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, [user._id]);


  const handleApprove = async (offerId) => {
    try {
      console.log(`offerId ==> ${offerId}`);
      await approveOffer(offerId);
      fetchOffers();
    } catch (error) {
      console.error('Error approving athlete:', error);
    }
  };

  const handleReject = async (offerId) => {
    try {
      console.log(`offerId ==> ${offerId}`);
      await rejectOffer(offerId);
      fetchOffers();
    } catch (error) {
      console.error('Error rejecting athlete:', error);
    }
  };

  const handleRemove = async (offerId) => {
    try {
      console.log(`offerId ==> ${offerId}`);
      await removeOffer(offerId);
      fetchOffers();
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

  const pendingOffersColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'athleteName',
      headerName: 'Full Name',
      sortable: true,
      width: 160,
    },
    { field: 'athleteAge', headerName: 'Age', type: 'number', width: 120 },
    { field: 'sportType', headerName: 'Sport Type', sortable: false, width: 130 },
    { field: 'bid', headerName: 'Bid', sortable: false, width: 130 },
    {
      field: 'managerName',
      headerName: 'Manager Name',
      sortable: false,
      width: 130,
      valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => renderActions('Pending', params.row.offerId),
    },
  ];

  const acceptedOffersColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'athleteName',
      headerName: 'Full Name',
      sortable: true,
      width: 160,
    },
    { field: 'athleteAge', headerName: 'Age', type: 'number', width: 120 },
    { field: 'sportType', headerName: 'Sport Type', sortable: false, width: 130 },
    { field: 'bid', headerName: 'Bid', sortable: false, width: 130 },
    {
      field: 'managerName',
      headerName: 'Manager Name',
      sortable: false,
      width: 130,
      valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => renderActions(params.row.status, params.row.offerId),
    },
    
  ];

  const rejectedOffersColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'athleteName',
      headerName: 'Full Name',
      sortable: true,
      width: 160,
    },
    { field: 'athleteAge', headerName: 'Age', type: 'number', width: 120 },
    { field: 'sportType', headerName: 'Sport Type', sortable: false, width: 130 },
    { field: 'bid', headerName: 'Bid', sortable: false, width: 130 },
    {
      field: 'managerName',
      headerName: 'Manager Name',
      sortable: false,
      width: 130,
      valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => renderActions(params.row.status, params.row.offerId),
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
    offerId: offer._id,
  }));

  const acceptedOffersRows = acceptedOffers.map((offer, index) => ({
    id: index + 1,
    athleteName: offer.athleteName,
    athleteAge: offer.athleteAge,
    sportType: offer.sportType,
    firstName: offer.user.firstName,
    lastName: offer.user.lastName,
    bid: offer.bid,
    fullName: `${offer.user.firstName || ''} ${offer.user.lastName || ''}`,
    status: offer.status,
    offerId: offer._id,
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
    offerId: offer._id,
  }));

  


  if(user.role !== 'Athlete') { 
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
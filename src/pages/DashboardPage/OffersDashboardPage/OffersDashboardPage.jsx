import DashboardPage from '../DashboardPage'
import AdminOffers from '../../../components/Offers/AdminOffers/AdminOffers'
import ManagerOffers from '../../../components/Offers/ManagerOffers/ManagerOffers'
import AthleteOffers from '../../../components/Offers/AthleteOffers/AthleteOffers'
import { Container } from '@mui/material'
import Box from '@mui/material/Box'

export default function OffersPageDashboard({ user }){
  if (user.role !== 'Admin' && user.role !== 'Manager' && user.role !== 'Athlete') {
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
      { user.role === 'Admin' && (
        <>
          <h1>Admin Offers Page</h1>
          <hr />
          <DashboardPage user={user} />
          <AdminOffers user={user} />
        </>
      )}

      { user.role === 'Manager' && (
        <>
          <h1>Manager Offers Page</h1>
          <hr />
          <DashboardPage user={user} />
          <ManagerOffers user={user} />
        </>
      )}

      { user.role === 'Athlete' && (
      <>
        <h1>Athlete Offers Page</h1>
        <hr />
        <AthleteOffers user={user} />
      </>
      )}
    </Container>
  )
}
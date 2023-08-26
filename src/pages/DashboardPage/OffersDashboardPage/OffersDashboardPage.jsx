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
      <DashboardPage user={user} />
      <h1>Offers</h1>
      <hr />
      { user.role === 'Admin' && (
        <AdminOffers user={user} />
      )}

      { user.role === 'Manager' && (
        <ManagerOffers user={user} />
      )}

      { user.role === 'Athlete' && (
        <AthleteOffers user={user} />
      )}
    </Container>
  )
}
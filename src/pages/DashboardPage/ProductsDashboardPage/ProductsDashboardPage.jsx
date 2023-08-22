import DashboardPage from '../DashboardPage'
import Products from '../../Products/Products'
import { Box, Container } from '@mui/material'
import AddProduct from '../../../components/AddProduct/AddProduct'
export default function ProductsPageDashboard() {
  return (
    <>
      <Container sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
        <Box>
          <DashboardPage />
        </Box>
        <Box sx={{ backgroundColor: "red" }}>
          <h1>Products</h1>
          <Products />
        </Box>
      </Container>
    </>
  )
}


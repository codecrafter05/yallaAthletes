import { useState } from 'react'
import DashboardPage from '../DashboardPage'
import { Box, Container } from '@mui/material'
import AddProduct from '../../../components/AddProduct/AddProduct'
import ProductList from '../../../components/ProductList/ProductList'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';

export default function ProductsPageDashboard({user, setUser}){


    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const tabComponents = [
      <AddProduct />,
      <ProductList /> // Replace this with your actual component for the Products List
    ];

  if (user.role !== 'Admin' && user.role !== 'Manager') {
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
      <Box>
      <DashboardPage user={user}/>
      <Typography variant='h3'>Products</Typography>
      <Box sx={{ width: '100%', bgcolor: 'background.paper', }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Add Products" />
          <Tab label="Products List" />
        </Tabs>
      </Box>
      {tabComponents[value]}
      </Box>
      </Container>
  );
}


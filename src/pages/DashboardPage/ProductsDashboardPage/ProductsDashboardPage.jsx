import DashboardPage from '../DashboardPage'
import Products from '../../Products/Products'
import { Box, Container } from '@mui/material'
import AddProduct from '../../../components/AddProduct/AddProduct'
import ProductList from '../../../components/ProductList/ProductList'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';

export default function ProductsPageDashboard(){

    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const tabComponents = [
      <AddProduct />,
      <ProductList /> // Replace this with your actual component for the Products List
    ];
  
  return (
    <>
      <Box sx={{ marginLeft:'150px', marginTop:'2px' }}>
      <DashboardPage />
      <Typography variant='h3'>Products</Typography>
      <Box sx={{ width: '100%', bgcolor: 'background.paper', }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Add Products" />
          <Tab label="Products List" />
        </Tabs>
      </Box>
      {tabComponents[value]}
      </Box>
    </>
  );
}


import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card2 from "../../components/Card/Card";
import Grid from '@mui/material/Unstable_Grid2';

const GridContainer = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(20),
}));

export default function BasicGrid({ data }) {
    return (
        <GridContainer>
            <Grid container spacing={3}>
                {data.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>

                        <Card2 item={item} />
                    </Grid>
                ))}
            </Grid>
        </GridContainer>
    );
}

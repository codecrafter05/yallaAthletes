import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card2 from "../../components/Card/Card";
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid({ data }) {
    return (
        <Box sx={{ flexGrow: 1, marginLeft: 20, marginRight: 20 }}>
            <Grid container spacing={3}>
                {data.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                        <Card2 item={item} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
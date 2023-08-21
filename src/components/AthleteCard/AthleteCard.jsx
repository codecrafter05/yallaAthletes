// import React from 'react';
// import Box from '@mui/material/Box';
// import Card2 from "../Card/Card";
// import Grid from '@mui/material/Unstable_Grid2';

// export default function AthleteCard({ athlete }) {
//     return (
//         <Box sx={{ flexGrow: 1, marginLeft: '5%', marginRight: '5%' }}>
//             <Grid container spacing={10}>
//                 {athlete.map((athlete, index) => (
//                     <Grid athlete xs={12} sm={6} md={4} lg={3} xl={2} key={index} sx={{ height: 400 }}>
//                         <Card2 item={item} />
//                     </Grid>
//                 ))}
//             </Grid>
//         </Box>
//     );
// }

import { Card, CardContent, Typography } from "@mui/material";

export default function AthleteCard({ athlete }) {

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {athlete.user.name} {/* Assuming 'name' is a property of the user object */}
        </Typography>
        <Typography color="textSecondary">
          Sport: {athlete.sportType}
        </Typography>
        {/* Display other athlete details using Typography components */}
        <Typography color="textSecondary">
          Personal Record: {athlete.personalRecord || "N/A"}
        </Typography>
        <Typography color="textSecondary">
          Height: {athlete.height} cm
        </Typography>
        <Typography color="textSecondary">
          Weight: {athlete.weight} kg
        </Typography>
        <Typography color="textSecondary">
          Achievements: {athlete.achievements || "None"}
        </Typography>
        <Typography color="textSecondary">
          Socials: {athlete.socials || "None"}
        </Typography>
        <Typography color="textSecondary">
          Status: {athlete.status}
        </Typography>
      </CardContent>
    </Card>
  );
}

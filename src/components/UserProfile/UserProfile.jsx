import { Card, CardContent, TextField, Grid } from "@mui/material";

export default function UserProfile({ user }) {
  return (
    <Card variant="outlined" sx={{mt:2}}>
      <CardContent>
        {user && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="First Name"
                variant="outlined"
                value={user.firstName}
                id="outlined-read-only-input"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Last Name"
                variant="outlined"
                value={user.lastName}
                id="outlined-read-only-input"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                value={user.email}
                id="outlined-read-only-input"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone"
                variant="outlined"
                value={user.phone}
                id="outlined-read-only-input"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Gender"
                variant="outlined"
                value={user.gender}
                id="outlined-read-only-input"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Date of Birth"
                variant="outlined"
                value={user.dateOfBirth}
                id="outlined-read-only-input"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Nationality"
                variant="outlined"
                value={user.nationality}
                id="outlined-read-only-input"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            {/* Display other user details here */}
          </Grid>
        )}
      </CardContent>
    </Card>
  );
}

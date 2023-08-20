import { useState } from "react";
import { updateUserProfile } from "../../utilities/users-api";
import { Card, CardContent, TextField, Button, Grid, MenuItem } from "@mui/material";

export default function EditUserProfile({ user, setUser }) {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSaveChanges = async () => {
    try {
      const updatedUser = await updateUserProfile(editedUser);
      setUser(updatedUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <h1>Edit User Profile</h1>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              variant="outlined"
              name="firstName"
              value={editedUser.firstName}
              onChange={handleInputChange}
              autoComplete="off"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              variant="outlined"
              name="lastName"
              value={editedUser.lastName}
              onChange={handleInputChange}
              autoComplete="off"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={6}>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={editedUser.email}
              onChange={handleInputChange}
              autoComplete="off"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phone"
              variant="outlined"
              name="phone"
              value={editedUser.phone}
              onChange={handleInputChange}
              autoComplete="off"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={6}>
              <TextField
                label="Gender"
                variant="outlined"
                name="gender"
                value={editedUser.gender}
                onChange={handleInputChange}
                autoComplete="off"
                select
                fullWidth
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </TextField>
            </Grid>
          <Grid item xs={6}>
            <TextField
              label="Date of Birth"
              variant="outlined"
              type="date"
              name="dateOfBirth"
              value={editedUser.dateOfBirth}
              onChange={handleInputChange}
              autoComplete="off"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>
        {/* Rest of the fields */}
        <Button variant="contained" onClick={handleSaveChanges} sx={{ marginTop: 2 }}>
          Save Changes
        </Button>
      </CardContent>
    </Card>
  );
}

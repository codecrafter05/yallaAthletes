import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

export default class SignUpForm extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: '',
    gender: '',
    dateOfBirth: '',
    nationality: '',
    phone: '',
    error: '',
    // photo: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Update user state with user
      this.props.setUser(user);
    } catch {
      // Invalid signup
      this.setState({
        error: 'Sign Up Failed - Try Again'
      });
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  handleSwitchToLogin = () => {
    this.props.setShowSignUp(false); // Call the function to switch back to the login form
  }

  // handleImageUpload = (evt) => {
  //   // get the image uploaded in input file, it will be the first element in files arr
  //   const file = evt.target.files[0];
  //   console.log(file);

  //   this.transformFileData(file);
  // }
  // // transfer file/image to base64 string
  // transformFileData = (file) => {
  //   //The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read.
  //   // FileReader can only access the contents of files that the user has explicitly selected, either using an HTML <input type="file"> element or by drag and drop
  //   // filereader is js object
  //   const reader = new FileReader();

  //   if (file) {
  //     // Starts reading the contents of the specified Blob, once finished, the "result" attribute contains a data: URL representing the file's data.
  //     reader.readAsDataURL(file);
  //     // Fired when a read has completed, successfully or not.
  //     reader.onloadend = () => {
  //       console.log(reader.result);
  //       this.setState(prevState => ({
  //         ...prevState,
  //         photo: reader.result
  //       }));

  //       // setError("");
  //     };
  //   } else {
  //     // no image
  //     this.setState(prevState => ({
  //       ...prevState,
  //       photo: ""
  //     }));

  //     // setError("");
  //   }
  // }



  render() {
    const disable = this.state.password !== this.state.confirm;

    return (
      <>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate autoComplete="off" onSubmit={this.handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </Grid>
          </Grid>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            autoComplete="off"
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                label="Password"
                type="password"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirm"
                value={this.state.confirm}
                onChange={this.handleChange}
                label="Confirm Password"
                type="password"
                autoComplete="off"
                error={this.state.password !== this.state.confirm}
                helperText={this.state.password !== this.state.confirm ? "Passwords do not match" : ""}
              />
            </Grid>
          </Grid>
          {/* <TextField
            margin="normal"
            fullWidth
            type="file"
            name="photo"
            inputProps={{ accept: "image/*" }}
            onChange={this.handleImageUpload}
          /> */}
          <TextField
            margin="normal"
            required
            fullWidth
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
            label="Gender"
            select
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
          <TextField
            margin="normal"
            required
            fullWidth
            name="dateOfBirth"
            value={this.state.dateOfBirth}
            onChange={this.handleChange}
            label="Date of Birth"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="nationality"
            value={this.state.nationality}
            onChange={this.handleChange}
            label="Nationality"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            label="Phone"
          />
          <Typography color="error" sx={{ margin: 0, padding: 0 }}>
            {this.state.error}
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={disable}
          >
            Sign Up
          </Button>
        </Box>
        <Link
          component="button"
          variant="body2"
          onClick={this.handleSwitchToLogin}
          sx={{ mt: 3 }}
        >
          Back to Login
        </Link>
      </>
    );
  

  }

}
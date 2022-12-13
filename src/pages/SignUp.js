import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Stack,
  Box,
  Button,
  Typography,
  TextField,
} from "@mui/material";

// Custom Components
import SnackBarNotification from "../components/common/SnackBarNotification";

// Functions
import { signup } from "../functions/auth";

const SignUp = () => {
  const [values, setValues] = useState({
    phoneNumber: "",
    password: "",
    snackBarMessage: "",
    openSnackbar: false,
    severity: "success",
  });
  const { phoneNumber, password, openSnackbar, snackBarMessage, severity } = values;
  const navigate = useNavigate();
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setValues({ ...values, openSnackbar: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phoneNumber && password) {
      console.log("PHONE NUMBER", phoneNumber, "PASSWORD", password);

      try {
        const res = await signup(phoneNumber, password);
        // dispatch(setCredentials({ ...userData, username }));
        console.log(res);
        setValues({
          ...values,
          snackBarMessage: res.data.message,
          severity: "success",
          openSnackbar: true,
        });
        navigate("/sign-in");
      } catch (err) {
        console.log(err);
        setValues({
          ...values,
          snackBarMessage: err.response.data.error,
          severity: "error",
          openSnackbar: true,
        });
      }
    }
  };

  return (
    <Container maxWdith="xl">
      <Stack sx={{ bgcolor: "#f0faf3", mt: 10 }}>
        <SnackBarNotification
          openSnackbar={openSnackbar}
          handleClose={handleClose}
          snackBarMessage={snackBarMessage}
          severity={severity}
        />
        <Typography variant="h4" fontWeight="600" sx={{ mt: 5 }}>
          E-Nauli
        </Typography>

        <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
          <Box sx={{ mt: 5 }}>
            <Typography>
              Already on E-Nauli? <Link to={"/"}>Sign In</Link>
            </Typography>
            <Typography variant="h5" sx={{ mt: 5 }}>
              SIGN UP
            </Typography>
            <Typography sx={{ mt: 4 }} fontWeight="500">
              Phone Number
            </Typography>
            <TextField
              onChange={handleChange("phoneNumber")}
              name="phoneNumber"
              value={phoneNumber}
            />
            <Typography sx={{ mt: 4 }} fontWeight="500">
              Password
            </Typography>
            <TextField
              type="password"
              onChange={handleChange("password")}
              name="password"
              value={password}
            />
          </Box>
          <Box sx={{ mb: 5 }}>
            {" "}
            <Button
              type="submit"
              disableElevation
              sx={{ bgcolor: "secondary.main", color: "white", mt: 2 }}
              variant="contained"
            >
              Sign Up
            </Button>
          </Box>
        </form>
      </Stack>
    </Container>
  );
};

export default SignUp;
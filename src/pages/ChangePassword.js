import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import { loadProfile, updateProfile } from "../functions/user";
import { isAuth } from "../helpers/auth";

const ChangePassword = () => {
  const [values, setValues] = useState({
    phoneNumber: "",
    password: "",
    snackBarMessage: "",
    openSnackbar: false,
    severity: "success",
  });
  const { phoneNumber, password, openSnackbar, snackBarMessage, severity } =
    values;

  const userId = isAuth()._id;


  const getUserInfo = () =>
    loadProfile(userId)
      .then((res) => {
        const { phoneNumber } = res.data;
        setValues({ ...values, phoneNumber });
      })
      .catch((err) => {
        console.log(err);
      });

  useEffect(() => {
    getUserInfo();
  },[]);

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
    if (password) {
      console.log("PASSWORD", password);

      try {
        const res = await updateProfile(userId, password);
        console.log(res);

        navigate("/homepage");
        setValues({
          ...values,
          snackBarMessage: res.data.message,
          severity: "success",
          openSnackbar: true,
        });
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

        <Typography variant="h5" fontWeight="400" sx={{ mt: 5 }}>
          Change Your Password
        </Typography>

        <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
          <Box sx={{ mt: 5 }}>
            <Typography sx={{ mt: 4 }} fontWeight="500">
              Phone Number
            </Typography>
            <TextField
              disabled
              onChange={handleChange("phoneNumber")}
              name="phoneNumber"
              value={phoneNumber}
            />
            <Typography sx={{ mt: 4 }} fontWeight="500">
              Enter New Password
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
              Change Password
            </Button>
          </Box>
        </form>
      </Stack>
    </Container>
  );
};

export default ChangePassword;

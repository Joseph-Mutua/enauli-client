import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Stack,
  Box,
  Button,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";

// Custom Components
import SnackBarNotification from "../components/common/SnackBarNotification";

const ResetPassword = () => {
  const [values, setValues] = useState({
    phoneNumber: "",
    password: "",
    passwordConfirmation: "",
    showPasswordForm: false,
    message: "",
    openSnackbar: false,
  });
  const {
    phoneNumber,
    password,
    passwordConfirmation,
    openSnackbar,
    message,
    showPasswordForm,
  } = values;
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

  const handleGetOtp = () => {
    setValues({ ...values, showPasswordForm: true });
  };
  const handleResendOtp = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phoneNumber && password) {
      console.log("PHONE NUMBER", phoneNumber, "PASSWORD", password);

      try {
        // const userData = await login({ username, password }).unwrap();
        // dispatch(setCredentials({ ...userData, username }));
        // setValues({ ...values, username: "", paswword: "", opensnackbar: true });
        navigate("/homepage");
      } catch (err) {
        if (!err?.response) {
          //   setErrMsg("No server response");
          // } else if (err.response?.status === false)
          //   setErrMsg("Wrong username or Password");
        }
      }
    }
  };

  return (
    <Container maxWdith="xl">
      <Stack sx={{ bgcolor: "#f0faf3", mt: 10 }}>
        <SnackBarNotification
          openSnackbar={openSnackbar}
          handleClose={handleClose}
          message={message}
          severity={"success"}
        />
        <Typography variant="h4" fontWeight="600" sx={{ mt: 5 }}>
          E-Nauli
        </Typography>

        <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
          <Box sx={{ mt: 5 }}>
            <Typography sx={{ my: 4 }} fontWeight="500">
              Enter Your Phone Number Below To Change Pin
            </Typography>

            <TextField
              placeholder="Enter Phone Number"
              onChange={handleChange("phoneNumber")}
              name="phoneNumber"
              value={phoneNumber}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      onClick={handleGetOtp}
                      disableElevation
                      variant="contained"
                      sx={{ height: "50", bgcolor: "secondary.main" }}
                    >
                      Get OTP
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
            {showPasswordForm && (
              <Box>
                <Box sx={{ mt: 4 }}>
                  <TextField
                    placeholder="Enter OTP Code Here"
                    type="password"
                    onChange={handleChange("password")}
                    name="password"
                    value={password}
                  />
                </Box>
                <Typography>
                  Didn't Receive Code?{" "}
                  <Button onClick={handleResendOtp}>Resend</Button>
                </Typography>

                <Box sx={{ mt: 4 }}>
                  <TextField
                    placeholder="Enter New 4-Digit Pin"
                    type="password"
                    onChange={handleChange("password")}
                    name="password"
                    value={password}
                  />
                </Box>

                <Box sx={{ mt: 4 }}>
                  <TextField
                    placeholder="Confirm Pin"
                    type="passwordConfirmation"
                    onChange={handleChange("passwordConfirmation")}
                    name="passwordConfirmation"
                    value={passwordConfirmation}
                  />
                </Box>
              </Box>
            )}
          </Box>
          <Box sx={{ mb: 5 }}>
            {" "}
            <Button
              type="submit"
              disableElevation
              sx={{ bgcolor: "secondary.main", color: "white", mt: 2 }}
              variant="contained"
            >
              Reset Pin
            </Button>
          </Box>
        </form>
      </Stack>
    </Container>
  );
};

export default ResetPassword;

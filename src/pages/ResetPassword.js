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

// Functions
import { forgotPassword, resetPassword } from "../functions/auth";
import { updateUser } from "../helpers/auth";

const ResetPassword = () => {
  const [values, setValues] = useState({
    phoneNumber: "",
    password: "",
    passwordConfirmation: "",
    showPasswordForm: false,
    snackBarMessage: "",
    openSnackbar: false,
    severity: "success",
    otp: "",
  });
  const {
    phoneNumber,
    password,
    passwordConfirmation,
    openSnackbar,
    snackBarMessage,
    severity,
    showPasswordForm,
    otp,
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

  const handleGetOtp = async () => {
    if (phoneNumber) {
      const res = await forgotPassword(phoneNumber);
      console.log("FORGOT PASSWORD RESPONSE", res);
    }
    setValues({ ...values, showPasswordForm: true });
  };
  const handleResendOtp = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === passwordConfirmation) {
      console.log(
        "PHONE NUMBER",
        phoneNumber,
        "PASSWORD",
        password,
        "OTP",
        otp
      );

      try {
        const response = await resetPassword(phoneNumber, password, otp);
        console.log(response);
        updateUser(response.data, () => {
          setValues({
            ...values,
            snackBarMessage: "Password Successfullly Reset!",
            severity: "success",
            openSnackbar: true,
          });
          navigate("/homepage");
        });
        // navigate("/");
      } catch (err) {
        console.log("RESET PASSWORD ERROR", err);
        setValues({
          ...values,
          snackBarMessage: err.error,
          opensnackbar: true,
        });
      }
    } else {
      setValues({
        ...values,
        snackBarMessage: "Passwords Do Not Match",
        opensnackbar: true,
      });
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
                    onChange={handleChange("otp")}
                    name="otp"
                    value={otp}
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
                    type="password"
                    placeholder="Confirm Pin"
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

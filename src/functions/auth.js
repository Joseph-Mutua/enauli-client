import axios from "axios";

export const signup = async (phoneNumber, password) => {
  return await axios.post(`${process.env.REACT_APP_API}/sign-up`, {
    phoneNumber,
    password,
  });
};

export const signin = async (phoneNumber, password) => {
  return await axios.post(`${process.env.REACT_APP_API}/sign-in`, {
    phoneNumber,
    password,
  });
};

export const forgotPassword = async (phoneNumber) => {
  return await axios.post(`${process.env.REACT_APP_API}/user/forgot-password`, {
    phoneNumber,
  });
};

export const resetPassword = async (phoneNumber, password, otp) => {
  return await axios.post(`${process.env.REACT_APP_API}/user/reset-password`, {
    phoneNumber,
    password,
    otp,
  });
};

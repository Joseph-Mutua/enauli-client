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

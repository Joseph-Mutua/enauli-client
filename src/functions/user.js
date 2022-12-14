import axios from "axios";


export const loadProfile = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API}/user/${id}`);
};


export const updateProfile = async (userId, password) => {
  return await axios.put(`${process.env.REACT_APP_API}/user/update`, {
    userId,
    password,
  });
};


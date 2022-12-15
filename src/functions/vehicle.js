import axios from "axios";

export const createVehicle = async (model, numberPlate) => {
  return await axios.post(`${process.env.REACT_APP_API}/vehicle`, {
    model,
    numberPlate,
  });
};

export const listVehicles = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/vehicles`, {});
};

export const readVehicle = async (slug) => {
  return await axios.get(`${process.env.REACT_APP_API}/vehicle/${slug}`, {});
};

export const updateVehicle = async (model, numberPlate, slug) => {
  return await axios.put(`${process.env.REACT_APP_API}/vehicle/${slug}`, {
    model,
    phoneNumber,
  });
};

export const removeVehicle = async (slug) => {
  return await axios.delete(`${process.env.REACT_APP_API}/vehicle/${slug}`, {});
};

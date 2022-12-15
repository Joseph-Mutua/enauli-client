import axios from "axios";

export const createSacco = async (name) => {
  return await axios.post(`${process.env.REACT_APP_API}/sacco`, {
    name,
  });
};

export const listSaccos = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/saccos`, {});
};

export const readSacco = async (slug) => {
  return await axios.get(`${process.env.REACT_APP_API}/sacco/${slug}`, {});
};

export const updateSacco = async (name, slug) => {
  return await axios.put(`${process.env.REACT_APP_API}/sacco/${slug}`, {
    name,
  });
};

export const removeSacco = async (slug) => {
  return await axios.delete(`${process.env.REACT_APP_API}/sacco/${slug}`, {});
};

export const getOfficials = async (_id) => {
  return await axios.get(`${process.env.REACT_APP_API}/sacco/officials/${_id}`);
};

export const getStations = async (_id) => {
  return await axios.get(`${process.env.REACT_APP_API}/sacco/stations/${_id}`);
};

export const getVehicles = async (_id) => {
  return await axios.get(`${process.env.REACT_APP_API}/sacco/vehicles/${_id}`);
};

export const getBalance = async (_id) => {
  return await axios.get(`${process.env.REACT_APP_API}/sacco/balance/${_id}`);
};

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

export const getOfficials = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API}/sacco/officials/${id}`);
};

export const getStations = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API}/sacco/stations/${id}`);
};

export const getVehicles = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API}/sacco/vehicles/${id}`);
};

export const getBalance = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API}/sacco/balance/${id}`);
};

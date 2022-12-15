import axios from "axios";

export const createStation = async (name, location) => {
  return await axios.post(`${process.env.REACT_APP_API}/station`, {
    name,
    location,
  });
};

export const listStations = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/stations`, {});
};

export const readStations = async (slug) => {
  return await axios.get(`${process.env.REACT_APP_API}/station/${slug}`, {});
};

export const updateStation = async (name, location, slug) => {
  return await axios.put(`${process.env.REACT_APP_API}/station/${slug}`, {
    name,
    phoneNumber,
  });
};

export const removeStation = async (slug) => {
  return await axios.delete(
    `${process.env.REACT_APP_API}/station/${slug}`,
    {}
  );
};

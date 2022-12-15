import axios from "axios";

export const createOfficial = async (name, phoneNumber) => {
  return await axios.post(`${process.env.REACT_APP_API}/official`, {
    name,
    phoneNumber
  });
};

export const listOfficials = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/officials`, {});
};

export const readOfficial = async (slug) => {
  return await axios.get(`${process.env.REACT_APP_API}/official/${slug}`, {});
};

export const updateOfficial = async (name, phoneNumber, slug) => {
  return await axios.put(`${process.env.REACT_APP_API}/official/${slug}`, {
    name,
    phoneNumber
  });
};

export const removeOfficial = async (slug) => {
  return await axios.delete(`${process.env.REACT_APP_API}/official/${slug}`, {});
};

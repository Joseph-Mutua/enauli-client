import axios from "axios";

export const createOperator = async (name, phoneNumber) => {
  return await axios.post(`${process.env.REACT_APP_API}/operator`, {
    name,
    phoneNumber,
  });
};

export const listOperators = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/operators`, {});
};

export const readOperator = async (slug) => {
  return await axios.get(`${process.env.REACT_APP_API}/operator/${slug}`, {});
};

export const updateOperator = async (name, phoneNumber, slug) => {
  return await axios.put(`${process.env.REACT_APP_API}/operator/${slug}`, {
    name,
    phoneNumber,
  });
};

export const removeOperator = async (slug) => {
  return await axios.delete(
    `${process.env.REACT_APP_API}/operator/${slug}`,
    {}
  );
};

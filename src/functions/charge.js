import axios from "axios";

export const createCharge = async (type, amount) => {
  return await axios.post(`${process.env.REACT_APP_API}/charge`, {
    type,
    amount,
  });
};



export const updateCharge = async (type, amount, slug) => {
  return await axios.put(`${process.env.REACT_APP_API}/charge/${slug}`, {
    type,
    amount,
  });
};

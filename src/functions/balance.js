import axios from "axios";

export const getBalance = async (_id) => {
  return await axios.get(`${process.env.REACT_APP_API}/balance/${_id}`, {});
};
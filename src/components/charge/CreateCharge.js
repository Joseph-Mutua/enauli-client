import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,

} from "@mui/material";

import { createCharge } from "../../functions/charge";

const CreateCharge = () => {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type && amount) {
      console.log("OFFCICIAL", type);
      try {
        createCharge(type, amount).then((res) => {
          console.log(res);
        setType("");
        setAmount("")
        });
      } catch (err) {
        console.log(err);
        // Save response to localStorage/cookie
      }
    }
  };


  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" sx={{ mt: 5 }}>
            Create Charge
          </Typography>
          <Typography sx={{ mt: 4 }} fontWeight="500">
            Type
          </Typography>
          <TextField
            name="type"
            fullWidth
            onChange={(e) => setType(e.target.value)}
            value={type}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          {" "}
          <Typography sx={{ mt: 4 }} fontWeight="500">
            Amount
          </Typography>
          <TextField
            type="number"
            name="amount"
            fullWidth
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </Box>
        <Box sx={{ mb: 5 }}>
          {" "}
          <Button
            onClick={handleSubmit}
            type="submit"
            disableElevation
            sx={{ bgcolor: "secondary.main", color: "white", mt: 2 }}
            variant="contained"
          >
            Create
          </Button>
        </Box>
      </form>
    </>
  );
};

export default CreateCharge;
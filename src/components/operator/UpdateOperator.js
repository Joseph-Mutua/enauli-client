import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";

import { updateOperator, readOperator } from "../../functions/operator";

const UpdateOperator = () => {
  const [operatorName, setOperatorName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { slug } = useParams();

  const navigate = useNavigate();
  const loadOperator = () =>
    readOperator(slug).then((res) => {
      console.log(res);
      setOperatorName(res.data.operator.name);
      setPhoneNumber(res.data.operator.phoneNumber);
    });

  useEffect(() => {
    loadOperator();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (operatorName) {
      console.log("operator", operatorName);
      try {
        updateOperator(operatorName, phoneNumber, slug).then((res) => {
          console.log(res);
          navigate(-1);
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
            Update Operator Details
          </Typography>
          <Typography sx={{ mt: 4 }} fontWeight="500">
            Name
          </Typography>
          <TextField
            name="operatorName"
            fullWidth
            onChange={(e) => setOperatorName(e.target.value)}
            value={operatorName}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          {" "}
          <Typography sx={{ mt: 4 }} fontWeight="500">
            Phone Number
          </Typography>
          <TextField
            name="phonenumber"
            fullWidth
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
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
            Update
          </Button>
        </Box>
      </form>
    </>
  );
};

export default UpdateOperator;

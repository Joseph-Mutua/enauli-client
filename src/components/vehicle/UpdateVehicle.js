import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";

import { updateVehicle, readVehicle } from "../../functions/vehicle";

const UpdateVehicle = () => {
  const [model, setModel] = useState("");
  const [numberPlate, setNumberPlate] = useState("");

  const { slug } = useParams();

  const navigate = useNavigate();
  const loadStation = () =>
    readVehicle(slug).then((res) => {
      console.log(res);
      setModel(res.data.vehicle.model);
      setNumberPlate(res.data.vehicle.numberPlate);
    });

  useEffect(() => {
    loadStation();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (model) {
      console.log("station", model);
      try {
        updateVehicle(model, numberPlate, slug).then((res) => {
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
            Update Vehicle Details
          </Typography>
          <Typography sx={{ mt: 4 }} fontWeight="500">
            Vehicle Model
          </Typography>
          <TextField
            name="model"
            fullWidth
            onChange={(e) => setModel(e.target.value)}
            value={model}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          {" "}
          <Typography sx={{ mt: 4 }} fontWeight="500">
            Number Plate
          </Typography>
          <TextField
            name="numberPlate"
            fullWidth
            onChange={(e) => setNumberPlate(e.target.value)}
            value={numberPlate}
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

export default UpdateVehicle;

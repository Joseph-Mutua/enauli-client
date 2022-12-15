import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  listVehicles,
  createVehicle,
  removeVehicle,
} from "../../functions/vehicle";

const CreateVehicle = () => {
  const [model, setModel] = useState("");
  const [numberPlate, setNumberPlate] = useState("");
  const [vehicles, setVehicles] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    loadVehicles();
  }, []);

  const loadVehicles = () => {
    listVehicles()
      .then((res) => {
        setVehicles(res.data);
        console.log("vehicle LIST RES", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (model && numberPlate) {
      console.log("OFFCICIAL", model);
      try {
        createVehicle(model, numberPlate).then((res) => {
          console.log(res);
          loadVehicles();
        });
      } catch (err) {
        console.log(err);
        // Save response to localStorage/cookie
      }
    }
  };
  const handleRemove = async (slug) => {
    if (window.confirm(`Are you sure you want to Delete vehicle ${slug} ?`)) {
      removeVehicle(slug)
        .then((res) => {
          console.log(res);
          loadVehicles();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" sx={{ mt: 5 }}>
            Add vehicle
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
            Add
          </Button>
        </Box>
      </form>
      {vehicles.map((vehicle) => (
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ bgcolor: "#E8E8E8", my: 2 }}
          key={vehicle._id}
        >
          <Box>{vehicle.model}</Box>
          <Box>{vehicle.numberPlate}</Box>
          <Box>
            {" "}
            <IconButton onClick={() => navigate(`${vehicle.slug}`)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleRemove(vehicle.slug)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Stack>
      ))}
    </>
  );
};

export default CreateVehicle;

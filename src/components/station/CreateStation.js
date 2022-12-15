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
  listStations,
  createStation,
  removeStation,
} from "../../functions/station";

const CreateStation = () => {
  const [stationName, setStationName] = useState("");
  const [location, setLocation] = useState("");
  const [stations, setStations] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    loadStations();
  }, []);

  const loadStations = () => {
    listStations()
      .then((res) => {
        setStations(res.data);
        console.log("station LIST RES", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (stationName && location) {
      console.log("OFFCICIAL", stationName);
      try {
        createStation(stationName, location).then((res) => {
          console.log(res);
          loadStations();
        });
      } catch (err) {
        console.log(err);
        // Save response to localStorage/cookie
      }
    }
  };
  const handleRemove = async (slug) => {
    if (window.confirm(`Are you sure you want to Delete station ${slug} ?`)) {
      removeStation(slug)
        .then((res) => {
          console.log(res);
          loadStations();
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
            Create station
          </Typography>
          <Typography sx={{ mt: 4 }} fontWeight="500">
            Name
          </Typography>
          <TextField
            name="stationName"
            fullWidth
            onChange={(e) => setStationName(e.target.value)}
            value={stationName}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          {" "}
          <Typography sx={{ mt: 4 }} fontWeight="500">
            Phone Number
          </Typography>
          <TextField
            name="location"
            fullWidth
            onChange={(e) => setLocation(e.target.value)}
            value={location}
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
      {stations.map((station) => (
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ bgcolor: "#E8E8E8", my: 2 }}
          key={station._id}
        >
          <Box>{station.name}</Box>
          <Box>{station.location}</Box>
          <Box>
            {" "}
            <IconButton onClick={() => navigate(`${station.slug}`)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleRemove(station.slug)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Stack>
      ))}
    </>
  );
};

export default CreateStation;

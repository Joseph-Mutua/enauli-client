import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";

import { updateStation, readStation } from "../../functions/station";

const UpdateStation = () => {
  const [stationName, setStationName] = useState("");
  const [location, setLocation] = useState("");

  const { slug } = useParams();

  const navigate = useNavigate();
  const loadStation = () =>
    readStation(slug).then((res) => {
      console.log(res);
      setStationName(res.data.station.name);
      setLocation(res.data.station.location);
    });

  useEffect(() => {
    loadStation();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (stationName) {
      console.log("station", stationName);
      try {
        updateStation(stationName, location, slug).then((res) => {
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
            Update Station Details
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
           Location
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
            Update
          </Button>
        </Box>
      </form>
    </>
  );
};

export default UpdateStation;

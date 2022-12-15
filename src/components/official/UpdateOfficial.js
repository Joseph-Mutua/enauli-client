import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";

import { updateOfficial, readOfficial } from "../../functions/official";

const UpdateOfficial = () => {
  const [officialName, setOfficialName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")

  const { slug } = useParams();

  const navigate = useNavigate();
  const loadOfficial = () =>
    readOfficial(slug).then((res) => {
      console.log(res);
      setOfficialName(res.data.official.name);
      setPhoneNumber(res.data.official.phoneNumber)
    });

  useEffect(() => {
    loadOfficial();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (officialName) {
      console.log("OFFICIAL", officialName);
      try {
        updateOfficial(officialName,phoneNumber, slug).then((res) => {
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
            Update Official Details
          </Typography>
          <Typography sx={{ mt: 4 }} fontWeight="500">
            Name
          </Typography>
          <TextField
            name="officialName"
            fullWidth
            onChange={(e) => setOfficialName(e.target.value)}
            value={officialName}
          />
        </Box>
        <Box sx={{mt:2}}>
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

export default UpdateOfficial;

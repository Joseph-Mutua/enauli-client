import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";

import { updateSacco, readSacco } from "../../functions/sacco";


const UpdateSacco = () => {
  const [saccoName, setSaccoName] = useState("");

  const { slug } = useParams();

  const navigate = useNavigate();
  const loadSacco = () =>
    readSacco(slug).then((res) => {
        console.log(res)
      setSaccoName(res.data.sacco.name);
    });

  useEffect(() => {
    loadSacco();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (saccoName) {
      console.log("SACCO", saccoName);
      try {
        updateSacco(saccoName, slug).then((res) => {
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
            Update Sacco Details
          </Typography>
          <Typography sx={{ mt: 4 }} fontWeight="500">
            Name
          </Typography>
          <TextField
            name="saccoName"
            fullWidth
            onChange={(e) => setSaccoName(e.target.value)}
            value={saccoName}
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

export default UpdateSacco;

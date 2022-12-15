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


import { listOfficials, createOfficial, removeOfficial } from "../../functions/official";




const CreateOfficial = () => {
const [officialName, setOfficialName] = useState("")
const [phoneNumber, setPhoneNumber] = useState("");
const [officials, setOfficials] = useState([]);



const navigate = useNavigate();
  useEffect(() => {
    loadOfficials();
  }, []);

  const loadOfficials = () => {
    listOfficials()
      .then((res) => {
        setOfficials(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (officialName && phoneNumber) {
      console.log("OFFCICIAL", officialName);
      try {
        createOfficial(officialName, phoneNumber).then((res) => {
          console.log(res);
          loadOfficials();
        });
      } catch (err) {
        console.log(err);
        // Save response to localStorage/cookie
      }
    }
  };
  const handleRemove = async (slug) => {
    if (window.confirm(`Are you sure you want to Delete official ${slug} ?`)) {
      removeOfficial(slug)
        .then((res) => {
          console.log(res);
          loadOfficials();
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
            Add Official
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
        <Box sx={{ mt: 2 }}>
          {" "}
          <Typography sx={{ mt: 4 }} fontWeight="500">
            Phone Number
          </Typography>
          <TextField
            name="phoneNumber"
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
            Add
          </Button>
        </Box>
      </form>
      {officials.map((official) => (
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ bgcolor: "#E8E8E8", my: 2 }}
          key={official._id}
        >
          <Box>{official.name}</Box>
          <Box>{official.phoneNumber}</Box>
          <Box>
            {" "}
            <IconButton onClick={() => navigate(`${official.slug}`)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleRemove(official.slug)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Stack>
      ))}
    </>
  );
};

export default CreateOfficial;

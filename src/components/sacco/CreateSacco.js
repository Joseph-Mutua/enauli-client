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
import { listSaccos, createSacco, removeSacco } from "../../functions/sacco";

import { setSaccoId } from "../../helpers/sacco";
const CreateSacco = () => {
  const [saccoName, setSaccoName] = useState("");
  const [saccos, setSaccos] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    loadSaccos();
  }, []);

  const loadSaccos = () => {
    listSaccos()
      .then((res) => {
        setSaccos(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (saccoName) {
      console.log("SACCO", saccoName);
      try {
        createSacco(saccoName).then((res) => {
          console.log(res);
          setSaccoId("saccoId", res.data._id);
          loadSaccos();
        });
      } catch (err) {
        console.log(err);
        // Save response to localStorage/cookie
      }
    }
  };
  const handleRemove = async (slug) => {
    if (window.confirm(`Are you sure you want to Delete Sacco ${slug} ?`)) {
      removeSacco(slug)
        .then((res) => {
          console.log(res);
          loadSaccos();
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
            Create Sacco
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
            Create
          </Button>
        </Box>
      </form>
      {saccos.map((sacco) => (
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ bgcolor: "#E8E8E8", my: 2 }}
          key={sacco._id}
        >
          {sacco.name}{" "}
          <Box>
            {" "}
            <IconButton onClick={() => navigate(`sacco/${sacco.slug}`)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleRemove(sacco.slug)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Stack>
      ))}
    </>
  );
};

export default CreateSacco;

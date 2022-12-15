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
  listOperators,
  createOperator,
  removeOperator,
} from "../../functions/operator";

const CreateOperator = () => {
  const [operatorName, setOperatorName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [operators, setOperators] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    loadOperators();
  }, []);

  const loadOperators = () => {
    listOperators()
      .then((res) => {
        setOperators(res.data);
        console.log("OPERATOR LIST RES",res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (operatorName && phoneNumber) {
      console.log("OFFCICIAL", operatorName);
      try {
        createOperator(operatorName, phoneNumber).then((res) => {
          console.log(res);
          loadOperators();
        });
      } catch (err) {
        console.log(err);
        // Save response to localStorage/cookie
      }
    }
  };
  const handleRemove = async (slug) => {
    if (window.confirm(`Are you sure you want to Delete operator ${slug} ?`)) {
      removeOperator(slug)
        .then((res) => {
          console.log(res);
          loadOperators();
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
            Add Vehicle Operator
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
      {operators.map((operator) => (
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ bgcolor: "#E8E8E8", my: 2 }}
          key={operator._id}
        >
          <Box>{operator.name}</Box>
          <Box>{operator.phoneNumber}</Box>
          <Box>
            {" "}
            <IconButton onClick={() => navigate(`${operator.slug}`)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleRemove(operator.slug)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Stack>
      ))}
    </>
  );
};

export default CreateOperator;

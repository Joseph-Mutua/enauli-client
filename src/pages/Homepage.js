import React from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

// Custom Components
import HomepageNav from "../components/nav/HomepageNav";

// Functions
import { isAuth, signout } from "../helpers/auth";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography sx={{ mt: 5 }} variant="h4" fontWeight="500">
        Homepage
      </Typography>
      {isAuth() && (
        <Stack direction="row" justifyContent="flex-end">
          <Button
            variant="text"
            sx={{ color: "secondary.main" }}
            onClick={() => {
              signout(() => {
                navigate("/");
              });
            }}
          >
            Logout
          </Button>
        </Stack>
      )}

      <Grid container spacing={3}>
        <Grid xs={1}></Grid>
        <Grid xs={2}>
          <Box sx={{ bgcolor: "#E8E8E8" }}>
            {" "}
            <HomepageNav />
          </Box>
        </Grid>
        <Grid xs={8}></Grid>
        <Grid xs={2}></Grid>
      </Grid>
    </Box>
  );
};

export default Homepage;

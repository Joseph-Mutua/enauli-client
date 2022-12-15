import React from "react";
import { Outlet } from "react-router-dom";

import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

// Custom Components
import HomepageNav from "../components/nav/HomepageNav";
import UserProfile from "../components/nav/UserProfile";

// Functions

const Homepage = () => {
  return (
    <Box>
      <UserProfile />
      <Typography sx={{ mt: 5 }} variant="h4" fontWeight="500">
        Homepage
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={1}></Grid>
        <Grid xs={2}>
          <Box sx={{ bgcolor: "#E8E8E8" }}>
            {" "}
            <HomepageNav />
          </Box>
        </Grid>
        <Grid xs={8}>
          {" "}
          <Outlet />
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
    </Box>
  );
};

export default Homepage;

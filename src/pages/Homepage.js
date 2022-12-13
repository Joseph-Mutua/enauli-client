import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

// Custom Components
import HomepageNav from "../components/nav/HomepageNav";

const Homepage = () => {
  return (
    <Box>
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
        <Grid xs={8}></Grid>
        <Grid xs={1}></Grid>
      </Grid>
    </Box>
  );
};

export default Homepage;

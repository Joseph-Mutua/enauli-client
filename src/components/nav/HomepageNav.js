import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";

const HomepageNav = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      sx={{
        flexGrow: 1,
        "& .MuiTab-root": {
          textTransform: "none",
          justifyContent: "flex-start",
        },
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ hidden: true }}
        sx={{
          border: 0,
          wrapped: { alignItems: "left" },
        }}
      >
        <Tab label="Sacco" />
        <Tab label="Officials" />
        <Tab label="Stations" />
        <Tab label="Charge" />
        <Tab label="Vehicles" />
        <Tab label="Operators" />
        <Tab label="Balance" />
      </Tabs>
    </Box>
  );
};

export default HomepageNav;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";

const HomepageNav = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
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
        value={selectedTab}
        onChange={handleChange}
        TabIndicatorProps={{ hidden: true }}
        sx={{
          border: 0,
          wrapped: { alignItems: "left" },
        }}
      >
        <Tab onClick={() => navigate("sacco")} label="Sacco" />
        <Tab onClick={() => navigate("officials")} label="Officials" />
        <Tab onClick={() => navigate("stations")} label="Stations" />

        <Tab onClick={() => navigate("vehicles")} label="Vehicles" />
        <Tab onClick={() => navigate("operators")} label="Operators" />
        <Tab onClick={() => navigate("charge")} label="Charge" />
        <Tab onClick={() => navigate("balance")} label="Balance" />
      </Tabs>
    </Box>
  );
};

export default HomepageNav;

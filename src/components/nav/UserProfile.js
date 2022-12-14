import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Stack,
  AppBar,
  CssBaseline,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";

import { isAuth, signout } from "../../helpers/auth";

const UserProfile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePasswordChange = () => {
    navigate("/change-password");
  };

  const handleLogout = () => {
    signout(() => {
      navigate("/");
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar disableElevation position="static">
        <Stack>
          {isAuth() && (
            <Stack direction="row" justifyContent="flex-end">
              <Box>
                {" "}
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handlePasswordChange}>
                    Change Password
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </Box>
            </Stack>
          )}
        </Stack>
      </AppBar>
    </Box>
  );
};

export default UserProfile;

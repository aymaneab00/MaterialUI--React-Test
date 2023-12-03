import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { InputBase } from "@mui/material";
import MailIcon from "@mui/icons-material/Email";
import yeezus from "./Yeezus.jpeg"
import AdbIcon from "@mui/icons-material/Adb";
export default function Navbar() {
  const [open, setopen] =useState(false)
  const Mytoolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "lightcyan",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
  }));
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "centre ",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "centre ",
    gap: "20px",
  }));
  return (
    <Box>
      <AppBar position="static">
        <Mytoolbar>
          <h6>
            TestSite
            <AdbIcon /> {/* sx={{display: {xs:'none'}}} */}
          </h6>
          <Search>
            <InputBase placeholder="search..." />{" "}
          </Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <MailIcon color="action" />
            </Badge>

            <UserBox>
              <Avatar
            onClick={()=>setopen(true)}
                sx={{ width: 30, height: 30 }}
                alt="Remy Sharp"
                src={yeezus}
              />
              <Typography variant="span">Aymane</Typography>
            </UserBox>
          </Icons>
        </Mytoolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
         onClose={()=>setopen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

      </AppBar>
    </Box>
  );
}

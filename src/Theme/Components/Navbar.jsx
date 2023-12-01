import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { InputBase } from "@mui/material";
import MailIcon from "@mui/icons-material/Email";

import AdbIcon from "@mui/icons-material/Adb";
export default function Navbar() {
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
            Aymane
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
                sx={{ width: 30, height: 30 }}
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
              <Typography variant="span">Aymane</Typography>
            </UserBox>
          </Icons>
        </Mytoolbar>
      </AppBar>
    </Box>
  );
}

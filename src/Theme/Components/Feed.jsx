import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from "@mui/material";
import React from "react";
import img from "./Yeezus.jpeg"
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Post from "./Post";
export default function Feed() {
  return (
    <Box
      flex={4}
      p={2}
      sx={{ display: { xs: "block", sm: "block" }, width: 100 }}
    >
<Post/>
<Post/>
<Post/>
<Post/>


    </Box>
  );
}

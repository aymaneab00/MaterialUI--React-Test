import { Box, List, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Layers from '@mui/icons-material/Layers';
import DarkModeIcon from '@mui/icons-material/DarkMode';
export default function SideBar() {
  return (
    <Box  flex={1}p={2}     sx={{display : {xs : "none" , sm:"block"}}}
    >
      <Box position="fixed" >

 <List component="div" disablePadding>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon>
            <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="home" />
          </ListItemButton>
        </List>
 <List component="div" disablePadding>
          <ListItemButton component="a" href="#pages" >
            <ListItemIcon>
           <Layers/>
            </ListItemIcon>
            <ListItemText primary="pages" />
          </ListItemButton>
        </List>
 <List component="div" disablePadding>
          <ListItemButton component="a" href="#groups" >
            <ListItemIcon>
            <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="groupes" />
          </ListItemButton>
        </List>
 <List component="div" disablePadding>
          <ListItemButton component="a" href="#groups" >
            <ListItemIcon>
            <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="marketplace" />
          </ListItemButton>
        </List>
 <List component="div" disablePadding>
          <ListItemButton component="a" href="#groups" >
            <ListItemIcon>
            <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="friends" />
          </ListItemButton>
        </List>
 <List component="div" disablePadding>
          <ListItemButton component="a" href="#settings" >
            <ListItemIcon>
            <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="settings" />
          </ListItemButton>
        </List>
 <List component="div" disablePadding>
          <ListItemButton component="a" href="#profile" >
            <ListItemIcon>
            <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="profile" />
          </ListItemButton>
        </List>
 <List component="div" disablePadding>
          <ListItemButton component="a" href="#profile" >
            <ListItemIcon>
      <DarkModeIcon/>
            </ListItemIcon>
            <Switch  />
          </ListItemButton>
        </List>

      </Box>
    </Box>
  )
}
// keywords mui : Autocomplete component : search complete words in in input with suported list prop

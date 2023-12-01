import { Box } from '@mui/material'
import React from 'react'

export default function RightBar() {
  return (
    <Box bgcolor="lightcoral" p={2} flex={2}  
    sx={{display : {xs : "none" , sm:"block"}}}
    >
        RightBar
        </Box>
  )
}

import { Button } from '@mui/material'
import React from 'react'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';


export default function Test() {
  return (
    <div>
    <Button variant="text" color="primary"> Text</Button>
    <Button startIcon={<AccessTimeFilledIcon/>} variant="contained" color='primary' size='small'>ahah</Button>
      <Button variant='contained' sx={{margin:5,padding:5 , "&:hover": {backgroundColor:"yellow"}}} >QSD</Button>
       {/* <BlueButton >HAHA</BlueButton> */}
       </div>  )
}

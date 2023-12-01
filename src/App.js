import { Box, Button, Container, Stack, styled } from '@mui/material';
import './App.css';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Navbar from './Theme/Components/Navbar';
import SideBar from './Theme/Components/SideBar';
import Feed from './Theme/Components/Feed';
import RightBar from './Theme/Components/RightBar';
function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "yellow",
    padding: 50
  })


  return (
    // <Container sx={{backgroundColor:"red"}}>
    <Box>
      <Navbar />
      <Stack direction="row" spacing={3} justifyContent="center">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
      {/* </Container> */}
    </Box>

  );
}

export default App;

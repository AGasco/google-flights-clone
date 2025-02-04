import { Box, Container } from '@mui/material';
import './App.css';
import backgroundImage from './assets/background.svg';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Container disableGutters>
        <Box
          component="img"
          src={backgroundImage}
          aria-hidden="true"
          sx={{
            width: '100%',
            height: '35%',
            objectFit: 'cover'
          }}
        />
      </Container>
    </>
  );
}

export default App;

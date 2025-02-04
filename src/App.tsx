import { Box, Container, Typography } from '@mui/material';
import './App.css';
import backgroundImage from './assets/background.svg';
import { FlightList, Navbar, SearchForm } from './components';

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

        <Container
          sx={{
            marginTop: '-4rem',
            width: '100%',
            maxWidth: { xs: '100%', md: '80%' }
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Flights
          </Typography>

          <SearchForm />

          <FlightList />
        </Container>
      </Container>
    </>
  );
}

export default App;

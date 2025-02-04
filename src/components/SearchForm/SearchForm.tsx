import { SearchOutlined } from '@mui/icons-material';
import { Box, Button, Grid2, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import { useFlightContext } from '../../context';
import { useSearchFlights } from '../../hooks';
import CabinClassSelect from './CabinClassSelect';
import DateSelector from './DateSelector';
import LocationInput from './LocationInput';
import PassengerSelect from './PassengerSelect';
import TripTypeSelect from './TripTypeSelect';

const SearchForm = () => {
  const {
    origin,
    setOrigin,
    destination,
    setDestination,
    departureDate,
    returnDate,
    cabinClass,
    passengers,
    tripType,
    setFlights
  } = useFlightContext();

  const { flights, loading, error, searchFlights } = useSearchFlights();

  const handleSearch = () => {
    if (!origin || !destination || !departureDate) return;

    searchFlights({
      origin,
      destination,
      departureDate,
      returnDate,
      cabinClass,
      passengers,
      tripType
    });
  };

  useEffect(() => {
    if (flights) {
      setFlights(flights);
    }
  }, [flights, setFlights]);

  return (
    <>
      <Paper elevation={3} sx={{ mb: '3rem' }}>
        <Box p={3}>
          {/* First Row */}
          <Grid2 container spacing={2} mb={1.5}>
            <Grid2 size={{ xs: 4, sm: 3, lg: 2 }}>
              <TripTypeSelect />
            </Grid2>
            <Grid2 size={{ xs: 2, md: 1 }}>
              <PassengerSelect />
            </Grid2>
            <Grid2 size={{ xs: 3, sm: 2 }}>
              <CabinClassSelect />
            </Grid2>
          </Grid2>
          {/* Second Row */}
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
              <LocationInput label="From" value={origin} onChange={setOrigin} />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
              <LocationInput
                label="To"
                value={destination}
                onChange={setDestination}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 6 }}>
              <DateSelector />
            </Grid2>
          </Grid2>

          <Button
            variant="contained"
            onClick={handleSearch}
            disabled={loading}
            sx={{
              height: 40,
              borderRadius: 20,
              mb: '-4.5rem',
              backgroundColor: '#1676e5',
              textTransform: 'none',
              fontWeight: 600,
              '&:disabled': {
                backgroundColor: '#f7f7f7'
              }
            }}
          >
            <SearchOutlined fontSize="small" sx={{ mr: '0.5rem' }} />
            Search
          </Button>
        </Box>
      </Paper>
      {loading && (
        <BounceLoader color={'#1676e5'} cssOverride={{ margin: '0 auto' }} />
      )}
      {error && <Typography variant="subtitle2">{error}</Typography>}
    </>
  );
};
export default SearchForm;

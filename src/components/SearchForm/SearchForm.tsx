import { SearchOutlined } from '@mui/icons-material';
import { Box, Button, Grid2, Paper } from '@mui/material';
import { useFlightContext } from '../../context';
import CabinClassSelect from './CabinClassSelect';
import DateSelector from './DateSelector';
import LocationInput from './LocationInput';
import PassengersSelect from './PassengersSelect';
import TripTypeSelect from './TripTypeSelect';

const SearchForm = () => {
  const { origin, setOrigin, destination, setDestination } = useFlightContext();

  return (
    <Paper elevation={3}>
      <Box p={3}>
        {/* First Row */}
        <Grid2 container spacing={2} mb={1.5}>
          <Grid2 size={{ xs: 4, sm: 3, lg: 2 }}>
            <TripTypeSelect />
          </Grid2>
          <Grid2 size={{ xs: 2, md: 1 }}>
            <PassengersSelect />
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
          <Grid2 size={{ xs: 16, lg: 6 }}>
            <DateSelector />
          </Grid2>
        </Grid2>

        <Button
          variant="contained"
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
  );
};
export default SearchForm;

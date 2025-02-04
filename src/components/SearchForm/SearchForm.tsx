import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, Button, Grid2, Paper } from '@mui/material';
import TripTypeSelect from './TripTypeSelect';

const SearchForm = () => {
  return (
    <Paper elevation={3}>
      <Box p={3}>
        {/* First Row */}
        <Grid2 container spacing={2} mb={1.5}>
          <Grid2 size={{ xs: 4, sm: 3, lg: 2 }}>
            <TripTypeSelect />
          </Grid2>
          <Grid2 size={{ xs: 2, md: 1 }}>Passengers</Grid2>
          <Grid2 size={{ xs: 3, sm: 2 }}>Cabin Class</Grid2>
        </Grid2>

        {/* Second Row */}
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>From</Grid2>
          <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>To</Grid2>
          <Grid2 size={{ xs: 16, lg: 6 }}>Date Selector</Grid2>
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
          <SearchOutlinedIcon fontSize="small" sx={{ mr: '0.5rem' }} />
          Search
        </Button>
      </Box>
    </Paper>
  );
};
export default SearchForm;

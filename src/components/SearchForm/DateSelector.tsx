import { Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useFlightContext } from '../../context';
import { useState } from 'react';

const DateSelector = () => {
  const {
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,
    tripType
  } = useFlightContext();

  const [departureDateOpen, setDepartureDateOpen] = useState(false);
  const [returnDateOpen, setReturnDateOpen] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        width: '100%',
        gap: 1
      }}
    >
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <DatePicker
          value={departureDate}
          onChange={(date) => {
            if (date) setDepartureDate(date);
          }}
          open={departureDateOpen}
          onClose={() => setDepartureDateOpen(false)}
          onOpen={() => setDepartureDateOpen(true)}
          disablePast
        />
      </Box>

      {tripType === 'round_trip' && (
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <DatePicker
            value={returnDate}
            onChange={(date) => {
              if (date) setReturnDate(date);
            }}
            open={returnDateOpen}
            onClose={() => setReturnDateOpen(false)}
            onOpen={() => setReturnDateOpen(true)}
            disablePast
          />
        </Box>
      )}
    </Box>
  );
};
export default DateSelector;

import SyncAltIcon from '@mui/icons-material/SyncAlt';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { FormControl, MenuItem, Select } from '@mui/material';
import { useFlightContext } from '../../context';
import { TripType } from '../../types';
import { useEffect } from 'react';

const options = [
  { value: 'one_way', label: 'One Way', Icon: TrendingFlatIcon },
  { value: 'round_trip', label: 'Round Trip', Icon: SyncAltIcon }
];

const TripTypeSelect = () => {
  const { tripType, setTripType, departureDate, setReturnDate } =
    useFlightContext();

  useEffect(() => {
    if (!departureDate) return;

    if (tripType === 'round_trip') {
      setReturnDate(new Date(departureDate?.getTime() + 3 * 86400000));
    }
  }, [tripType]);

  return (
    <FormControl fullWidth>
      <Select
        variant="standard"
        value={tripType}
        onChange={(e) => setTripType(e.target.value as TripType)}
        sx={{
          fontSize: '12px',
          height: '30px',
          '& .MuiSelect-select': {
            display: 'flex',
            alignItems: 'center'
          }
        }}
      >
        {options.map(({ value, label, Icon }) => (
          <MenuItem
            value={value}
            sx={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}
          >
            <Icon sx={{ fontSize: '16px', mr: '10px' }} />
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TripTypeSelect;

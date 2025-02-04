import { FormControl, MenuItem, Select } from '@mui/material';
import { useFlightContext } from '../../context';
import { CabinClass } from '../../types';

const options = [
  { value: 'economy', label: 'Economy' },
  { value: 'premium_economy', label: 'Premium Economy' },
  { value: 'business', label: 'Business' },
  { value: 'first', label: 'First' }
];

const CabinClassSelect = () => {
  const { cabinClass, setCabinClass } = useFlightContext();

  return (
    <FormControl fullWidth>
      <Select
        variant="standard"
        value={cabinClass}
        onChange={(e) => setCabinClass(e.target.value as CabinClass)}
        sx={{
          fontSize: '12px',
          height: '30px',
          '& .MuiSelect-select': {
            display: 'flex',
            alignItems: 'center'
          }
        }}
      >
        {options.map(({ value, label }) => (
          <MenuItem
            key={value}
            value={value}
            sx={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}
          >
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default CabinClassSelect;

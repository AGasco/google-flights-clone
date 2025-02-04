import { Autocomplete, TextField } from '@mui/material';
import { Location } from '../../types';

interface Props {
  label: string;
  value: Location | null;
  onChange: (location: Location | null) => void;
}

const LocationInput = ({ label, value, onChange }: Props) => {
  return (
    <Autocomplete
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
      options={[]}
      getOptionLabel={(option) => `${option.name} (${option.code})`}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          fullWidth
          size="small"
          sx={{
            // Label color
            '& .MuiFormLabel-root, & .MuiFormLabel-root.Mui-focused': {
              color: 'rgba(0, 0, 0, 0.6)'
            },
            // Outlined border styles
            '& .MuiOutlinedInput-root': {
              borderRadius: '4px',
              '& fieldset': {
                borderColor: 'rgba(0, 0, 0, 0.23)'
              },
              '&:hover fieldset': {
                borderColor: 'rgba(0, 0, 0, 0.87)'
              },
              '&.Mui-focused fieldset': {
                borderColor: 'rgba(0, 0, 0, 0.87)'
              }
            }
          }}
        />
      )}
    />
  );
};

export default LocationInput;

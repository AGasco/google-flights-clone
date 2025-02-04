import { Autocomplete, TextField } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDebounce, useSearchAirports } from '../../hooks';
import { Location } from '../../types';

interface Props {
  label: string;
  value: Location | null;
  onChange: (location: Location | null) => void;
}

const LocationInput = ({ label, value, onChange }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const { locations, loading } = useSearchAirports(debouncedSearchTerm);

  const handleInputChange = useCallback(
    (
      _: React.SyntheticEvent<Element, Event>,
      value: string,
      reason: string
    ) => {
      if (reason === 'input') setSearchTerm(value);
    },
    []
  );

  return (
    <Autocomplete
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
      onInputChange={handleInputChange}
      options={locations || []}
      getOptionLabel={(option) => `${option.name} (${option.code})`}
      loading={loading}
      loadingText={
        <span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Loading...</span>
      }
      noOptionsText={
        <span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
          Type a city/airport...
        </span>
      }
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
            },
            // Text inside the input
            '& .MuiOutlinedInput-input': {
              color: 'black',
              padding: '8px 12px'
            },
            // Autocomplete dropdown text
            '& .MuiAutocomplete-listbox .MuiAutocomplete-option': {
              color: 'rgba(0, 0, 0, 0.6)'
            },
            '& .MuiAutocomplete-listbox .MuiAutocomplete-option.Mui-focused': {
              color: 'rgba(0, 0, 0, 0.6)',
              backgroundColor: 'rgba(0, 0, 0, 0.08)'
            }
          }}
        />
      )}
    />
  );
};

export default LocationInput;

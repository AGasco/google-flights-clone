import { CalendarMonth, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import {
  BaseSingleInputFieldProps,
  FieldSection
} from '@mui/x-date-pickers/models';
import { format } from 'date-fns';
import { MouseEvent, useRef, useState } from 'react';
import { useFlightContext } from '../../context';

interface CustomInputProps {
  value: Date | null;
  onClick?: (event: MouseEvent<HTMLInputElement>) => void;
  inputRef?: React.Ref<HTMLDivElement>;
  onCustomDateChange?: (date: Date) => void;
}

type ExtendedFieldProps = BaseSingleInputFieldProps<
  Date | null,
  Date,
  FieldSection,
  false,
  unknown
> & {
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onCustomDateChange?: (date: Date) => void;
};

const CustomInput = (props: CustomInputProps) => {
  const { value, onClick, inputRef, onCustomDateChange } = props;
  const dateValue = value ? format(value, 'EEE, MMM d') : '';

  const handleDateChange = (days: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!value) return;

    const newDate = new Date(value);
    newDate.setDate(newDate.getDate() + days);

    onCustomDateChange?.(newDate);
  };

  return (
    <Box
      ref={inputRef}
      onClick={onClick}
      sx={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid rgba(0, 0, 0, 0.23)',
        borderRadius: '4px',
        padding: '8px 12px',
        gap: '8px',
        height: '40px',
        '&:hover': { borderColor: 'rgba(0, 0, 0, 0.87)' }
      }}
    >
      <CalendarMonth
        fontSize="small"
        sx={{ color: 'action.active', flexShrink: 0 }}
      />

      <input
        type="button"
        value={dateValue}
        readOnly
        style={{
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          width: '100%',
          padding: 0,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}
      />

      <Box
        sx={{
          display: 'flex',
          gap: '4px',
          flexShrink: 0
        }}
      >
        <ChevronLeft
          sx={{ cursor: 'pointer', '&:hover': { opacity: 0.6 } }}
          onClick={(e) => handleDateChange(-1, e)}
        />
        <ChevronRight
          sx={{ cursor: 'pointer', '&:hover': { opacity: 0.6 } }}
          onClick={(e) => handleDateChange(1, e)}
        />
      </Box>
    </Box>
  );
};

const DateSelector = () => {
  const {
    tripType,
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate
  } = useFlightContext();

  const [departureDateOpen, setDepartureDateOpen] = useState(false);
  const [returnDateOpen, setReturnDateOpen] = useState(false);

  const departureRef = useRef();
  const returnRef = useRef();

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        flexDirection: { xs: 'column', sm: 'row' },
        width: '100%'
      }}
    >
      <Box sx={{ flex: 1, minWidth: 0 }} ref={departureRef}>
        <DatePicker
          value={departureDate}
          onChange={(date) => {
            if (date) setDepartureDate(date);
          }}
          open={departureDateOpen}
          onClose={() => setDepartureDateOpen(false)}
          onOpen={() => setDepartureDateOpen(true)}
          disablePast
          slots={{
            field: CustomInput
          }}
          slotProps={{
            field: {
              value: departureDate,
              onClick: () => setDepartureDateOpen(true),
              onCustomDateChange: (newDate: Date) => {
                setDepartureDate(newDate);
                if (tripType === 'round_trip' && newDate > returnDate!) {
                  setReturnDate(newDate);
                }
              }
            } as ExtendedFieldProps,
            popper: {
              placement: 'bottom-start',
              anchorEl: departureRef.current
            }
          }}
        />
      </Box>

      {tripType === 'round_trip' && (
        <Box
          sx={{ flex: 1, minWidth: 0 }}
          ref={returnRef}
          onClick={() => setReturnDateOpen(true)}
        >
          <DatePicker
            value={returnDate}
            onChange={(date) => {
              if (date) setReturnDate(date);
            }}
            open={returnDateOpen}
            onClose={() => setReturnDateOpen(false)}
            onOpen={() => setReturnDateOpen(true)}
            disablePast
            minDate={departureDate || undefined}
            slots={{
              field: CustomInput
            }}
            slotProps={{
              field: {
                value: returnDate,
                onClick: () => setReturnDateOpen(true),
                onCustomDateChange: (newDate: Date) => {
                  setReturnDate(newDate);
                  if (newDate < departureDate!) {
                    setDepartureDate(newDate);
                  }
                }
              } as ExtendedFieldProps,
              popper: {
                placement: 'bottom-start',
                anchorEl: returnRef.current
              }
            }}
          />
        </Box>
      )}
    </Box>
  );
};
export default DateSelector;

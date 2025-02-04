import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {
  Box,
  Button,
  Container,
  Popover,
  Select,
  Typography
} from '@mui/material';
import { MouseEvent, useState } from 'react';
import { useFlightContext } from '../../context';
import { PassengerCount } from '../../types';

const PassengerSelect = () => {
  const { passengers, setPassengers } = useFlightContext();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [tempPassengers, setTempPassengers] =
    useState<PassengerCount>(passengers);

  const handleOpen = (e: MouseEvent<HTMLElement>) => {
    setTempPassengers(passengers);
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDone = () => {
    setPassengers(tempPassengers);
    handleClose();
  };

  const handleCancel = () => {
    setTempPassengers(passengers);
    handleClose();
  };

  const updateCount = (type: 'adults' | 'children', delta: number) => {
    setTempPassengers((prev) => {
      const newValue = Math.max(type === 'adults' ? 1 : 0, prev[type] + delta);
      return { ...prev, [type]: newValue };
    });
  };

  const totalPassengers = passengers.adults + passengers.children;

  return (
    <>
      <Select
        variant="standard"
        value={totalPassengers}
        open={false}
        onMouseDown={handleOpen}
        sx={{
          fontSize: '12px',
          height: '30px',
          '& .MuiSelect-select': {
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }
        }}
        renderValue={() => (
          <>
            <PersonOutlineOutlinedIcon sx={{ fontSize: '16px' }} />
            {totalPassengers}
          </>
        )}
      />

      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={(_, reason) => {
          if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
            setPassengers(tempPassengers);
          }
          handleClose();
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <Container sx={{ p: '16px', minWidth: '250px' }}>
          <Box>
            {/* Adults */}
            <Box
              mb="12px"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Typography variant="body2">Adults</Typography>
              <Container
                disableGutters
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Button
                  variant="outlined"
                  size="small"
                  disabled={tempPassengers.adults <= 1}
                  onClick={() => updateCount('adults', -1)}
                  sx={{
                    fontSize: '30px',
                    lineHeight: '1rem',
                    minWidth: 0
                  }}
                >
                  -
                </Button>
                <Typography variant="body2">{tempPassengers.adults}</Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => updateCount('adults', 1)}
                  sx={{
                    fontSize: '20px',
                    lineHeight: '1rem',
                    minWidth: 0
                  }}
                >
                  +
                </Button>
              </Container>
            </Box>

            {/* Children */}
            <Box
              mb="12px"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Typography variant="body2">Children</Typography>
              <Container
                disableGutters
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Button
                  variant="outlined"
                  size="small"
                  disabled={tempPassengers.children <= 0}
                  onClick={() => updateCount('children', -1)}
                  sx={{
                    fontSize: '30px',
                    lineHeight: '1rem',
                    minWidth: 0
                  }}
                >
                  -
                </Button>
                <Typography variant="body2">
                  {tempPassengers.children}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => updateCount('children', 1)}
                  sx={{
                    fontSize: '20px',
                    lineHeight: '1rem',
                    minWidth: 0
                  }}
                >
                  +
                </Button>
              </Container>
            </Box>

            {/* Popover Buttons */}
            <Container
              disableGutters
              sx={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <Button
                variant="text"
                size="small"
                onClick={handleCancel}
                sx={{
                  color: '#0162e3',
                  fontWeight: 600,
                  '&:hover': { opacity: 0.8 }
                }}
              >
                Cancel
              </Button>

              <Button
                variant="text"
                size="small"
                onClick={handleDone}
                sx={{
                  color: '#0162e3',
                  fontWeight: 600,
                  '&:hover': { opacity: 0.8 }
                }}
              >
                Done
              </Button>
            </Container>
          </Box>
        </Container>
      </Popover>
    </>
  );
};

export default PassengerSelect;

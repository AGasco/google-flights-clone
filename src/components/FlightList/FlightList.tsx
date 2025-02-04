import { Box, Card, CardContent, Grid2, Typography } from '@mui/material';
import { useFlightContext } from '../../context';

const FlightList = () => {
  const { flights } = useFlightContext();

  if (!flights || flights.length === 0) return null;

  return (
    <Grid2 spacing={2}>
      {flights.map((x) => (
        <Grid2 key={x.id} size={{ xs: 12, md: 6 }} mb={3}>
          <Card elevation={3} sx={{ p: '0 5px' }}>
            <CardContent
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ display: 'flex', gap: '1rem', flex: '0 0 30%' }}>
                <img
                  src={x.carrierLogoUrl}
                  width="40px"
                  style={{ objectFit: 'contain' }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    fontSize={15}
                  >
                    {x.departure} - {x.arrival}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontSize={12}
                    sx={{ opacity: 0.7 }}
                  >
                    {x.carrierName}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Typography variant="subtitle1">{x.duration}</Typography>
                <Typography variant="body2" fontSize={12} sx={{ opacity: 0.7 }}>
                  {x.origin}-{x.destination}
                </Typography>
              </Box>

              <Box
                sx={{
                  height: '100%',
                  alignSelf: 'flex-start',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {x.stops > 0 ? (
                  <>
                    <Typography variant="subtitle1">
                      {x.stops} stop{x.stops !== 1 && 's'}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontSize={12}
                      sx={{ opacity: 0.7 }}
                    >
                      {x.stopAirports.length > 0 &&
                        ` ${x.stopAirports.join(' | ')}`}
                    </Typography>
                  </>
                ) : (
                  <Typography variant="subtitle1">Nonstop</Typography>
                )}
              </Box>

              <Typography variant="h6" color="primary">
                {x.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};
export default FlightList;

import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import HouseIcon from '@mui/icons-material/House';
import LuggageIcon from '@mui/icons-material/Luggage';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { AppBar, Avatar, Box, Container, Link, Toolbar } from '@mui/material';
import googleLogo from '../assets/google.svg';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: '#fff', color: '#202124' }}
      >
        <Container maxWidth={false}>
          <Toolbar
            variant="dense"
            sx={{ justifyContent: 'space-between', height: '3.5rem' }}
          >
            <Box
              sx={{
                justifyContent: 'space-between',
                display: 'flex'
              }}
            >
              <Link href="/">
                <img
                  src={googleLogo}
                  alt="Google Logo"
                  width="80"
                  style={{ marginTop: '10px' }}
                />
              </Link>

              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexGrow: 1
                  }}
                >
                  <NavLink isDummy={true}>
                    <LuggageIcon
                      color="primary"
                      sx={{ width: '18px', marginRight: '5px' }}
                    />
                    Travel
                  </NavLink>
                  <NavLink isDummy>
                    <TravelExploreIcon
                      color="primary"
                      sx={{ width: '18px', marginRight: '8px' }}
                    />
                    Explore
                  </NavLink>
                  <NavLink href="/">
                    <FlightIcon
                      color="primary"
                      sx={{
                        width: '18px',
                        marginRight: '8px',
                        transform: 'rotate(45deg)'
                      }}
                    />
                    Flights
                  </NavLink>
                  <NavLink isDummy>
                    <HotelIcon
                      color="primary"
                      sx={{ width: '18px', marginRight: '8px' }}
                    />
                    Hotels
                  </NavLink>
                  <NavLink isDummy>
                    <HouseIcon
                      color="primary"
                      sx={{ width: '18px', marginRight: '8px' }}
                    />
                    Vacation Rentals
                  </NavLink>
                </Box>

                <Avatar
                  alt="Test User"
                  src="/static/images/avatar/2.jpg"
                  sx={{
                    flexGrow: 0,
                    marginLeft: 'auto',
                    cursor: 'not-allowed'
                  }}
                />
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;

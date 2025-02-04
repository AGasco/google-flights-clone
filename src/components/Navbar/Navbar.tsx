import {
  Flight,
  Hotel,
  House,
  Luggage,
  Menu as MenuIcon,
  TravelExplore
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material';
import * as React from 'react';
import googleLogo from '../../assets/google.svg';
import NavLink from './NavLink';

const links = ['Travel', 'Explore', 'Flights', 'Hotels', 'Vacation Rentals'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
            {/* Mobile Menu */}
            <Box
              sx={{
                justifyContent: 'space-between',
                display: { xs: 'flex', md: 'none' }
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={!!anchorElNav}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {links.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Logo, Links & Avatar */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'space-between', md: 'flex-start' },
                flexGrow: 1
              }}
            >
              <Link href="/" alignContent="center">
                <img
                  src={googleLogo}
                  alt="Google Logo"
                  width="80"
                  style={{ marginTop: '10px' }}
                />
              </Link>

              <Box
                sx={{
                  display: 'flex',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                  marginLeft: '1.5rem'
                }}
              >
                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    flexGrow: 1
                  }}
                >
                  <NavLink isDummy={true}>
                    <Luggage
                      color="primary"
                      sx={{ width: '18px', marginRight: '5px' }}
                    />
                    Travel
                  </NavLink>
                  <NavLink isDummy>
                    <TravelExplore
                      color="primary"
                      sx={{ width: '18px', marginRight: '8px' }}
                    />
                    Explore
                  </NavLink>
                  <NavLink href="/">
                    <Flight
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
                    <Hotel
                      color="primary"
                      sx={{ width: '18px', marginRight: '8px' }}
                    />
                    Hotels
                  </NavLink>
                  <NavLink isDummy>
                    <House
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
      <Toolbar sx={{ marginBottom: '-0.3rem' }} />
    </>
  );
};

export default Navbar;

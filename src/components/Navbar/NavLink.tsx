import { Box, Link, LinkProps } from '@mui/material';
import { forwardRef, ReactNode } from 'react';

interface Props extends LinkProps {
  children: ReactNode;
  href?: string;
  isDummy?: boolean;
}

const NavLink = forwardRef<HTMLAnchorElement, Props>(
  ({ href = '', isDummy = false, sx, children, ...rest }, ref) => (
    <Box alignContent="center">
      <Link
        ref={ref}
        href={isDummy ? undefined : href}
        sx={{
          ...sx,
          cursor: isDummy ? 'not-allowed' : 'pointer',
          borderRadius: '20px',
          border: '1px solid #DDDDDD',
          padding: '10px 14px',
          margin: '0 0.2rem',
          fontSize: '12px',
          fontWeight: 600,
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          height: '40px',
          color: '#202124',
          '&:hover': {
            backgroundColor: '#f7f7f7'
          }
        }}
        {...rest}
      >
        {children}
      </Link>
    </Box>
  )
);

export default NavLink;

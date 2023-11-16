import { Link, NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import {
  AppBar,
  Box,
  Divider,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

function Layout() {
  return (
    <Paper
      elevation={3}
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: { xs: '100vh', sm: 'auto', md: 'auto' },
      }}
    >
      <AppBar position="static">
        <Toolbar
          component={'div'}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'right',
            gap: '2rem',
          }}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.activeLink}` : `${styles.navLink}`
            }
          >
            <Typography variant="h4">Users</Typography>
          </NavLink>
          <NavLink
            to="/albums"
            end={true}
            className={({ isActive }) =>
              isActive ? `${styles.activeLink}` : `${styles.navLink}`
            }
          >
            <Typography variant="h4">Albums</Typography>
          </NavLink>
        </Toolbar>
      </AppBar>

      <Box sx={{ m: '1rem' }}>
        <Outlet />
      </Box>

      <Box
        sx={{
          xs: {
            position: 'absolute',
            bottom: '0',
          },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <Divider variant="fullwidth" sx={{ marginY: '1rem' }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginX: '1rem',
            mb: '1rem',
          }}
        >
          <Typography variant="caption">Created by Artem Nikitin</Typography>
          <Typography variant="caption">BSU 2023</Typography>
        </Box>
      </Box>
    </Paper>
  );
}
export default React.memo(Layout);

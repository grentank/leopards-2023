import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { logoutThunk } from '../../features/redux/slices/user/thunkActions';

export default function NavigationBar(): JSX.Element {
  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            Hi, {user.status === 'logged' ? user.username : 'Guest'}
          </IconButton>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          {user.status === 'guest' && (
            <>
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
              <Button component={Link} to="/signup" color="inherit">
                Sign Up
              </Button>
            </>
          )}
          {user.status === 'logged' && (
            <>
              <Button component={Link} to="/transactions" color="inherit">
                Transactions
              </Button>
              {/* <Button component={Link} to="/search" color="inherit">
                Search-
              </Button> */}
              <Button color="inherit" onClick={() => dispatch(logoutThunk())}>
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

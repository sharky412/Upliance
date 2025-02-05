import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Tooltip,
  useMediaQuery,
  createTheme,
  ThemeProvider
} from '@mui/material';
import { 
  Home as HomeIcon, 
  Person as ProfileIcon, 
  Login as LoginIcon, 
  Logout as LogoutIcon,
  Menu as MenuIcon 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Custom Theme
  const theme = createTheme({
    palette: {
      primary: {
        main: '#3f51b5',  
        light: '#7986cb', 
        dark: '#303f9f'    
      },
      background: {
        default: '#f4f4f4' 
      }
    }
  });

  // Responsive checks
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const isAuthenticated = useSelector((state) => state.user?.isAuthenticated);
  const user = useSelector((state) => state.user?.userData);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
    setMobileOpen(false);
  };

  const navItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    ...(isAuthenticated 
      ? [{ text: 'Profile', icon: <ProfileIcon />, path: '/profile' }] 
      : [
          { text: 'Login', icon: <LoginIcon />, path: '/login' },
          { text: 'Signup', icon: <LoginIcon />, path: '/signup' }
        ]
    )
  ];

  const renderNavList = () => (
    <List>
      {navItems.map(({ text, icon, path }) => (
        <ListItem 
          key={text} 
          button 
          onClick={() => handleNavigation(path)}
          sx={{ 
            '&:hover': { 
              backgroundColor: theme.palette.primary.light,
              color: 'white'
            }
          }}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
      {isAuthenticated && (
        <ListItem 
          button 
          onClick={handleLogout}
          sx={{ 
            '&:hover': { 
              backgroundColor: 'error.main',
              color: 'white'
            }
          }}
        >
          <ListItemIcon><LogoutIcon /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      )}
    </List>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          {/* Mobile Menu Button */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isSmallScreen && (
              <IconButton 
                color="inherit" 
                edge="start" 
                onClick={toggleDrawer} 
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6">
              My App
            </Typography>
          </Box>

          {/* Navigation Actions */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            flexWrap: 'wrap',
            justifyContent: 'flex-end'
          }}>
            {!isSmallScreen && navItems.map(({ text, icon, path }) => (
              <Button 
                key={text} 
                color="inherit" 
                onClick={() => handleNavigation(path)} 
                startIcon={icon}
                sx={{ 
                  '&:hover': { 
                    backgroundColor: theme.palette.primary.light 
                  }
                }}
              >
                {text}
              </Button>
            ))}
            
            {isAuthenticated && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {!isSmallScreen && (
                  <Tooltip title="Logout">
                    <IconButton color="inherit" onClick={handleLogout}>
                      <LogoutIcon />
                    </IconButton>
                  </Tooltip>
                )}
                {user?.avatar && (
                  <Avatar 
                    src={user.avatar} 
                    alt={user.name} 
                    sx={{ width: 32, height: 32 }} 
                  />
                )}
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            width: 240,
            backgroundColor: theme.palette.background.default
          },
        }}
      >
        {renderNavList()}
      </Drawer>
    </ThemeProvider>
  );
};

export default Navbar;
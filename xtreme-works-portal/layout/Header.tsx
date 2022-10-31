import Head from 'next/head';
import { updateDrawer } from '../store/applicationSlice';

import { TeamLayout } from '../layout/Dashboard';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector  } from "react-redux";
import { updateDashboardTab } from '../store/applicationSlice';

const lightColor = 'rgba(255, 255, 255, 0.7)';


function DashboardPage({ children }) {
  const dispatch = useDispatch();
  const { dashboard_tab } = useSelector((state: any) => state.application);
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item onClick={() => { dispatch(updateDrawer({ drawer: true })) }}>
                <MenuIcon />
            </Grid>
            <Grid item xs />
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="inherit" sx={{ p: 0.5 }}>
                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                Authentication
              </Typography>
            </Grid>
            <Grid item>
              <Button
                sx={{ borderColor: lightColor }}
                variant="outlined"
                color="inherit"
                size="small"
              >
                Web setup
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
        <Tabs value={dashboard_tab} textColor="inherit">
          <Tab label="Users" onClick={(): any => { dispatch(updateDashboardTab({ dashboard_tab: 0 })) }}/>
          <Tab label="Sign-in method" onClick={(): any => { dispatch(updateDashboardTab({ dashboard_tab: 1 })) }}/>
          <Tab label="Templates" onClick={(): any => { dispatch(updateDashboardTab({ dashboard_tab: 2 })) }}/>
          <Tab label="Usage" onClick={(): any => { dispatch(updateDashboardTab({ dashboard_tab: 3 })) }}/>
        </Tabs>
      </AppBar>
      { children }
    </div>
  )
}

export default DashboardPage

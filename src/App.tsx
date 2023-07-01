import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';;
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import GridViewIcon from '@mui/icons-material/GridView';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import './App.scss';
import Grid from '@mui/material/Unstable_Grid2';
import { Button,  Container,  FormControl,  InputLabel,  MenuItem,  Select,  SelectChangeEvent,  TextField, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';




const drawerWidth = 280;


const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [city, setCity] = React.useState('barcelona');
  const [departament, setDepartament] = React.useState('1');
  const [sortBy, setSortBy] =React.useState('delayed');
  const [arrivalDate, setArrivalDate] =React.useState('15 Jun');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const handleChangeArrivalDate = (event: SelectChangeEvent) => {
    setArrivalDate(event.target.value as string);
  };

  const handleChangeSortBy = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as string);
  };


  const handleChangeCity = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };


  const handleChangeDepartament = (event: SelectChangeEvent) => {
    setDepartament(event.target.value as string);
  };

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#F9F9FB' }}>
      <CssBaseline />
          <SearchIcon />
      <AppBar position="fixed" open={open} className="appbar">
        
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}} >
        <Box>
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{  mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
             <SearchIcon sx={{fontSize: 30, color: "#C1C1C1", position: 'relative', left: 60 }}/>
      
              <TextField 
              
              id="standard-search"
              placeholder='Search by tracking number'
              type="search"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              sx={{  width: 600, marginLeft: 10,  '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              }}} />
</Box>
</Box>
<Box>
<Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: -2}}>
<Box  sx={{ minWidth: 120 }} className="toolbar_select_search">
      <span className='selectsearch'>City</span>
      <FormControl >
        <Select

          value={city}
          onChange={handleChangeCity}
          sx={{ fontWeight: 500, '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          }}}
        >
          <MenuItem value={'barcelona'}>Barcelona</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box  sx={{ minWidth: 120 }} className="toolbar_select_search">
      <span className='selectsearch'>Departament</span>
      <FormControl >
        <Select

          value={departament}
          onChange={handleChangeDepartament}
          sx={{ fontWeight: 500, '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          }}}
        >
          <MenuItem value={'1'}>1</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box className="toolbar-date">
      Wed 15 Jun, 12:10:22
    </Box>
    </Box>
    </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
       
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
   
      >
        <DrawerHeader>
          <img src='/images/logo.png' id="logo"/>

          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'ltr' ? <Box className="sidebar_arrow_block"><ChevronLeftIcon className='sidebar_arrow_right' /> </Box>: <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
    
        <List className='sidebar_menu'>
        <ListItem  className='sidebar_menu_button' disablePadding>
              <ListItemButton className='sidebar_menu_button_info'>
                <ListItemIcon className='sidebar_menu_button_icon'>
                   <ErrorOutlineIcon /> 
                </ListItemIcon>
                <ListItemText primary="Request" />
              </ListItemButton>
            </ListItem>

            <ListItem  className='sidebar_menu_button' disablePadding>
              <ListItemButton className='sidebar_menu_button_info'>
                <ListItemIcon className='sidebar_menu_button_icon'>
                   <NotificationsNoneIcon /> 
                </ListItemIcon>
                <ListItemText primary="Notification" />
                <Box className="count_notification">
                10
              </Box>
              </ListItemButton>

            </ListItem>
        </List>
        <Divider />
        <List className='sidebar_menu'>
        <ListItem  className='sidebar_menu_button' disablePadding>
              <ListItemButton className='sidebar_menu_button_info'>
                <ListItemIcon className='sidebar_menu_button_icon'>
                   <GridViewIcon /> 
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>

            <ListItem  className='sidebar_menu_button' disablePadding>
              <ListItemButton className='sidebar_menu_button_info'>
                <ListItemIcon className='sidebar_menu_button_icon'>
                   <LocalShippingIcon /> 
                </ListItemIcon>
                <ListItemText primary="Shipments" />
              </ListItemButton>
            </ListItem>

            <ListItem  className='sidebar_menu_button' disablePadding>
              <ListItemButton className='sidebar_menu_button_info'>
                <ListItemIcon className='sidebar_menu_button_icon'>
                   <InboxIcon /> 
                </ListItemIcon>
                <ListItemText primary="Parcels" />
              </ListItemButton>
            </ListItem>

            <ListItem  className='sidebar_menu_button' disablePadding>
              <ListItemButton className='sidebar_menu_button_info'>
                <ListItemIcon className='sidebar_menu_button_icon'>
                   <EmojiFlagsIcon /> 
                </ListItemIcon>
                <ListItemText primary="Branches" />
              </ListItemButton>
            </ListItem>


            <ListItem  className='sidebar_menu_button' disablePadding>
              <ListItemButton className='sidebar_menu_button_info'>
                <ListItemIcon className='sidebar_menu_button_icon'>
                   <PersonOutlineIcon  /> 
                </ListItemIcon>
                <ListItemText primary="Clients" />
              </ListItemButton>
            </ListItem>

    
        </List>

          <Box  className={"bottom_drawer"}>
          <Button variant="contained" className={"create_shipment"}><span>+</span> Create shipment</Button>
          
          <Divider />
            <Box className={'profile_block'}>
            <div><img src='images/profile.jpg' className='profile_img'/></div>
            <div className='profile_info'><p className='profile_name'>Darrell Steward</p><p className='profile_post'>Manager</p></div>
            <div className='profile_menu'>...</div>
            </Box>
            </Box>
      </Drawer>
      <Main open={open} className={'main'}>
        <DrawerHeader />
        <Grid container >
        <Grid xs={6} sx={{display: 'flex', justifyContent: 'start'}}>
         <h2>Shipments</h2>
         <Box
      sx={{
        marginTop: 1,
        marginLeft: 10,
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <Link href="#" className="shipments_menu_active">Arrival(20)</Link>
      <Link href="#"  className="shipments_menu">
         Available(5)
      </Link>
      <Link href="#"  className="shipments_menu">
      Departure(36)
      </Link>
    </Box>
        </Grid>
        <Grid xs={6} sx={{textAlign: 'right'}}>
        <Box sx={{display: 'flex', justifyContent: 'end', marginTop: -2}}>
<Box  sx={{ minWidth: 120 }} className="toolbar_select_shipments">
      <span className='selectsearch'>Sort By</span>
      <FormControl >
        <Select

          value={sortBy}
          onChange={handleChangeSortBy}
          sx={{ fontWeight: 500, '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          }}}
        >
          <MenuItem value={'delayed'}>Delayed</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box  sx={{ minWidth: 120 }} className="toolbar_select_shipments">
      <span className='selectsearch'>Arrival date</span>
      <FormControl >
        <Select

          value={arrivalDate}
          onChange={handleChangeArrivalDate}
          sx={{ fontWeight: 500, '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          }}}
        >
          <MenuItem value={'15 Jun'}>15 Jun</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </Box>
        </Grid>
      </Grid>
      </Main>
    </Box>
  );
}
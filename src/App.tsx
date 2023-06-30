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
import { Button,  FormControl,  InputLabel,  MenuItem,  Select,  SelectChangeEvent,  TextField, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const drawerWidth = 280;



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
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };




  const handleChangeCity = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };


  const handleChangeDepartament = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
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
          labelId="demo-simple-select-label"
          id="demo-simple-select"
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
          labelId="demo-simple-select-label"
          id="demo-simple-select"
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
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Main>
    </Box>
  );
}
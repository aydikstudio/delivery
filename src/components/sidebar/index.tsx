import * as React from 'react';
import { Box, IconButton, styled, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import List from '@mui/material/List'
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
import {drawerWidth, ListItemTemplate} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";


function Sidebar() {

    const sidebarMenuHeader = [
        {
            component:  <ErrorOutlineIcon />,
            status: 'none',
            name: "Request",
            link: '/request'
        },
        {
            component: <NotificationsNoneIcon /> ,
            status: 'none',
            name: "Notification",
            link: '/notification'
        },

    ];



    const sidebarMenu = [
        {
            component:  <GridViewIcon />  ,
            status: 'none',
            name: "Dashboard",
            link: '/dashboard'
        },
        {
            component: <LocalShippingIcon /> ,
            status: 'active',
            name: 'Shipments',
            link: '/shipments/arrival'
        },

        {
            component:  <InboxIcon />  ,
            status: 'none',
            name: "Parcels",
            link: '/parcels'
        },

        {
            component:  <EmojiFlagsIcon />  ,
            status: 'none',
            name: "Branches",
            link: '/branches'
        },

        {
            component:  <PersonOutlineIcon  /> ,
            status: 'none',
            name: "Clients",
            link: '/clients'
        },
    ];

   




    const theme = useTheme();
    const dispatch = useDispatch();
    const open = useSelector((state : any) => state.open)

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      }));
    return (
        <div>
             <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={() => dispatch({type: 'switchsidebar'})}
            edge="start"
            sx={{ position: 'absolute', top: 0, left: 20, mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon sx={{fontSize: 40}}/>
          </IconButton>
     
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

          <IconButton onClick={() => dispatch({type: 'switchsidebar'})} >
            {theme.direction === 'ltr' ? <Box className="sidebar_arrow_block"><ChevronLeftIcon className='sidebar_arrow_right' /> </Box>: <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
    
        <List className='sidebar_menu'>
        {sidebarMenuHeader.map((item) => {
            return (
                ListItemTemplate(item.component, item.status, item.name, item.link)
            )
        })}
        </List>
        <Divider />
        <List className='sidebar_menu'>

        {sidebarMenu.map((item) => {
            return (
                ListItemTemplate(item.component, item.status, item.name, item.link)
            )
        })}

      
    
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
        </div>
    )
}

export default Sidebar;
import * as React from 'react';

import { SvgIconComponent } from "@mui/icons-material";

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
import { Link } from "react-router-dom";

export const drawerWidth = 280;

// function update_current_path(link:string = '') {
//   let current_path = '';
//   if(link.length > 0) {
//     current_path = link.split('/').filter(item => item != '')[0];
//   } else {
//      current_path = window.location.pathname.split('/').filter(item => item != '')[0];
//   }


 
//   return current_path;
// }


export function ListItemTemplate(type: string) {

  const [current_path, setCurrentPath] = React.useState( window.location.pathname.split('/').filter(item => item != '')[0])
  const [sidebarMenuHeader, setSidebarMenuHeader] = React.useState([
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

]);



const [sidebarMenu, setSidebarMenu] = React.useState([
    {
        component:  <GridViewIcon />  ,
        name: "Dashboard",
        link: '/dashboard'
    },
    {
        component: <LocalShippingIcon /> ,
        name: 'Shipments',
        link: '/shipments/arrival'
    },

    {
        component:  <InboxIcon />  ,
  
        name: "Parcels",
        link: '/parcels'
    },

    {
        component:  <EmojiFlagsIcon />  ,
        name: "Branches",
        link: '/branches'
    },

    {
        component:  <PersonOutlineIcon  /> ,
        name: "Clients",
        link: '/clients'
    },
]);



  const setActiveMenu = (link:string) => {
    setCurrentPath(link.split('/').filter(item => item != '')[0])
  }

  
    return (
      <div>
        {type == 'header' ? sidebarMenuHeader.map((item) => (
          <Link to={item.link} style={{textDecoration: 'none'}} onClick={() => {setActiveMenu(item.link)}} >
          <ListItem  className={current_path == item.link.split('/').filter(item => item != '')[0] ? 'sidebar_menu_button_active' : 'sidebar_menu_button '} disablePadding>
            <ListItemButton className='sidebar_menu_button_info '>
              <ListItemIcon className='sidebar_menu_button_icon '>
              {item.component}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
  </Link>
        )) : sidebarMenu.map((item) => (
          <Link to={item.link} style={{textDecoration: 'none'}} onClick={() => {setActiveMenu(item.link)}} >
          <ListItem  className={current_path == item.link.split('/').filter(item => item != '')[0] ? 'sidebar_menu_button_active' : 'sidebar_menu_button '} disablePadding>
            <ListItemButton className='sidebar_menu_button_info '>
              <ListItemIcon className='sidebar_menu_button_icon '>
              {item.component}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
  </Link>
        ))}
       
</div>
    )
}


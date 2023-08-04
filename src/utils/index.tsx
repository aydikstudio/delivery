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




export function getArrayWithUnicValues(arr: any, group: string, type: string) {
   let new_arr:any = [];

   if(group == 'all') {
    arr.map((item1: any) => {
      if(!new_arr.find((item: any) => item == item1[type] )) {
        new_arr.push(item1[type])
      }
     })
   } else {
    arr.filter((item2:any) => item2.status_main == group ).map((item1: any) => {
      if(!new_arr.find((item: any) => item == item1[type] )) {
        new_arr.push(item1[type])
      }
     })
   }
  

   return new_arr;
}

export function navigateSearch() {
  let search_text = ''
  if( window.location.href.indexOf("?") >= 0) {
    const search_path = window.location.href.split('?').filter(item => item != '')[1]
    search_text = (search_path.split('=')[0] == "search" ? search_path.split('=')[1] : '')
  }

  return search_text;
}


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
        {type == 'header' ? sidebarMenuHeader.map((item, index) => (
          <Link key={index} to={item.link} style={{textDecoration: 'none'}} onClick={() => {setActiveMenu(item.link)}} >
          <ListItem  className={current_path == item.link.split('/').filter(item => item != '')[0] ? 'sidebar_menu_button_active' : 'sidebar_menu_button '} disablePadding>
            <ListItemButton className='sidebar_menu_button_info '>
              <ListItemIcon className='sidebar_menu_button_icon '>
              {item.component}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
  </Link>
        )) : sidebarMenu.map((item, index) => (
          <Link key={index} to={item.link} style={{textDecoration: 'none'}} onClick={() => {setActiveMenu(item.link)}} >
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



export function getColorProcent(procent:number) {
  if(procent >= 67) {
    return '#f05252'
  } else if(procent <= 33) {
    return '#49c100'
  } else {
    return '#eeb405'
  }
 
}

export const getProperty = (procent:number, base_width: number) => {
let obj = {
  backgroundColor: '',
  width: base_width*(procent/100),
  transition: 'width 0.2s ease-in-out'
}
if(procent >= 67) {
  obj.backgroundColor = '#f05252'
} else if(procent <= 33) {
  obj.backgroundColor = '#49c100'
} else {
  obj.backgroundColor = '#eeb405'
}


return obj

}



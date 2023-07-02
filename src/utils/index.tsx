import { ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIconProps } from "@mui/material";
import { Link } from "react-router-dom";
import { SvgIconComponent } from "@mui/icons-material";

export const drawerWidth = 280;
const pathname = window.location.pathname;


export function currentLinkDivived() {
      const link = pathname.split('/').filter(item => item != '');
     return link;
}

export function ListItemTemplate(componentIcon:any, status:string, name:string, link:string) {
  
    return (
        <Link to={link} style={{textDecoration: 'none'}} >
        <ListItem  className={ currentLinkDivived()[0] == link.split('/').filter(item => item != '')[0] ? 'sidebar_menu_button_active' : 'sidebar_menu_button '} disablePadding>
          <ListItemButton className='sidebar_menu_button_info '>
            <ListItemIcon className='sidebar_menu_button_icon '>
            {componentIcon}
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItemButton>
        </ListItem>
</Link>
    )
}


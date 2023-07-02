import { ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIconProps } from "@mui/material";
import { Link } from "react-router-dom";
import { SvgIconComponent } from "@mui/icons-material";

export const drawerWidth = 280;




export function ListItemTemplate(componentIcon:any, status:string, name:string, link:string) {
    return (
        <Link to={link} style={{textDecoration: 'none'}}>
        <ListItem  className={status == 'active' ? 'sidebar_menu_button_active' : 'sidebar_menu_button '} disablePadding>
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


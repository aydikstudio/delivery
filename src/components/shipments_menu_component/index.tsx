import * as React from 'react';
import { Box, FormControl, Grid, MenuItem, Select,  SelectChangeEvent } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getArrayWithUnicValues } from '../../utils';



const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

function ShipmentsMenuComponent(type:any='') {

    const shipments = useSelector((state : any) => state.shipments)
    const [menuActive, setMenuActive] = React.useState('arrival');
    const pathname = window.location.pathname;

    const dispatch = useDispatch();
    const sortBy = useSelector((state : any) => state.sortByDate);
    const arrivalDate = useSelector((state : any) => state.sortByStatus);

    const handleChangeArrivalDate = (event: SelectChangeEvent) => {
      dispatch({type: 'updatesortbystatus', payload: event.target.value as string});
      };
    
      const handleChangeSortBy = (event: SelectChangeEvent) => {
       
        dispatch({type: 'updatesortbydate', payload: event.target.value as string});
      };
    

      const getCountArray = (text: string):number => {
        return shipments.filter((item: any) => item.status_main == text).length;
      }
  
 
    return (
        <div>
             <Box sx={{mt: 5}}>
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
  <Link to="/shipments/arrival" className={pathname == '/shipments/arrival' || pathname == '/' ? 'shipments_menu_active' : 'shipments_menu'}  onClick={() => setMenuActive('arrival')}>Arrival({getCountArray('arrival')})</Link>
  <Link to="/shipments/available" className={pathname == '/shipments/available' ? 'shipments_menu_active' : 'shipments_menu'}  onClick={() => setMenuActive('available')}>
     Available({getCountArray('available')})
  </Link>
  <Link to="/shipments/departure"  className={pathname == '/shipments/departure' ? 'shipments_menu_active' : 'shipments_menu'}  onClick={() => setMenuActive('departure')}>
  Departure({getCountArray('departure')})
  </Link>
</Box>
    </Grid>
    {type.type == 'arrival' && (
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
  <MenuItem value={'no'}>No</MenuItem>


  <MenuItem  value={'number'}>Shipment number</MenuItem>
  <MenuItem value={'truck'}>Truck</MenuItem>
  <MenuItem  value={'weight'}>Total weight, kg</MenuItem>
  <MenuItem  value={'status'}>Status</MenuItem>
  <MenuItem  value={'departure_date'}>Departure date</MenuItem>
  <MenuItem value={'arrival_date'}>Arrival date</MenuItem>
  <MenuItem  value={'time_delay'}>Time delay</MenuItem>


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
   <MenuItem value={'no'}>No</MenuItem>
   {getArrayWithUnicValues(shipments, 'arrival', 'arrival_date').map((item: any, index:number) => (
  <MenuItem key={index} value={item}>{item}</MenuItem>
 ))}

 </Select>
</FormControl>
</Box>
</Box>
 </Grid>
    )}
   
  </Grid>
  </Box>
        </div>
    )
   
}

export default ShipmentsMenuComponent;
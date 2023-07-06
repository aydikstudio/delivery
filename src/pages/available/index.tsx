
import Box from '@mui/material/Box';

import Grid from '@mui/material/Unstable_Grid2';
import AvailableTransportCard from '../../components/available_transport_card';
import ShipmentsMenuComponent from '../../components/shipments_menu_component';
import { useSelector } from 'react-redux';



function Available() {

  const shipments = useSelector((state : any) => state.shipments)

    return(
      <>
      <ShipmentsMenuComponent />

        <Box sx={{ flexGrow: 1, mt: 10 }}>
        <Grid container spacing={2}>
        {shipments.length > 0 ? shipments.filter((item: any) => item.status_main == 'available').map((item: any, index: number) => (
                   <Grid xs={6} key={index}>
                   <AvailableTransportCard item={item}/>
                 </Grid>
             
            )): "Нет данных"}
          
        
        </Grid>
      </Box>
      </>
    )
}


export default Available;
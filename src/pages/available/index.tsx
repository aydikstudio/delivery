import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import AvailableTransportCard from '../../components/available_transport_card';
import ShipmentsMenuComponent from '../../components/shipments_menu_component';
import { shipments } from '../../data/data';


function Available() {
    return(
      <>
      <ShipmentsMenuComponent />

        <Box sx={{ flexGrow: 1, mt: 10 }}>
        <Grid container spacing={2}>
        {shipments.length > 0 ? shipments.filter((item) => item.status_main == 'available').map((item, index) => (
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
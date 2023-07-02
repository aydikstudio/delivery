import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import AvailableTransportCard from '../../components/available_transport_card';
import ShipmentsMenuComponent from '../../components/shipments_menu_component';


function Available() {
    return(
      <>
      <ShipmentsMenuComponent />

        <Box sx={{ flexGrow: 1, mt: 10 }}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <AvailableTransportCard />
          </Grid>
      
        </Grid>
      </Box>
      </>
    )
}


export default Available;
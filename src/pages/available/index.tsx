import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import AvailableTransportCard from '../../components/available_transport_card';


function Available() {
    return(
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <AvailableTransportCard />
          </Grid>
      
        </Grid>
      </Box>
    )
}


export default Available;
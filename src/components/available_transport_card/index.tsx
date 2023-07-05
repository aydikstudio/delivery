import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';



function AvailableTransportCard(item1: any) {
        const item = item1.item;
    return (
      <Card sx={{padding: 3}}>
        {item && (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
     
            <Typography component="div" variant="h4">
            {item.destination} <span style={{fontSize: 16, color: '#b3b3b3'}}> {item.departure_date}</span>
            </Typography>
            <Typography variant="h3" component="div" sx={{color: '#f05252'}}>
            {item.busy_weigh/item.weight*100}%
            </Typography>
           
          
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Box>
            <Box >
          <Typography component="div" variant="h6" style={{color: '#b3b3b3'}}>
            Available, kg
            </Typography>
            <Typography component="div"  style={{fontSize: 20, color: '#b3b3b3'}}>
            <span style={{color: '#000'}}>{item.busy_weigh}</span>/{item.weight}
            </Typography>         
            </Box>
            <Box mt={3}>
          <Typography component="div" variant="h6" style={{color: '#b3b3b3'}}>
            Shipment number
            </Typography>
            <Typography component="div"  style={{fontSize: 20, color: '#b3b3b3'}}>
            <span style={{color: '#000'}}>{item.number}</span>
            </Typography>         
            </Box>
            <Box mt={3}>
          <Typography component="div" variant="h6" style={{color: '#b3b3b3'}}>
            Truck
            </Typography>
            <Typography component="div"  style={{fontSize: 20, color: '#b3b3b3'}}>
            <span style={{color: '#000'}}>{item.truck}</span>
            </Typography>         
            </Box>
          </Box>
          <Box>
          <CardMedia
          component="img"
          sx={{ width: '100%', marginTop: 2 }}
          image="/images/track.png"
        />
          </Box>
          </Box>
          
        </Box>
        )}
        
   
      </Card>
    )
}

export default AvailableTransportCard;
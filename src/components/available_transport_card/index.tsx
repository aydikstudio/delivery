import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


function AvailableTransportCard() {
    const theme = useTheme();

    return (
      <Card sx={{padding: 3}}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
     
            <Typography component="div" variant="h4">
             Barcelona-Valencia <span style={{fontSize: 16, color: '#b3b3b3'}}>15 Jun, 2:00 pm</span>
            </Typography>
            <Typography variant="h3" component="div" sx={{color: '#f05252'}}>
            90%
            </Typography>
           
          
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Box>
            <Box >
          <Typography component="div" variant="h6" style={{color: '#b3b3b3'}}>
            Available, kg
            </Typography>
            <Typography component="div"  style={{fontSize: 20, color: '#b3b3b3'}}>
            <span style={{color: '#000'}}>20</span>/200
            </Typography>         
            </Box>
            <Box mt={3}>
          <Typography component="div" variant="h6" style={{color: '#b3b3b3'}}>
            Shipment number
            </Typography>
            <Typography component="div"  style={{fontSize: 20, color: '#b3b3b3'}}>
            <span style={{color: '#000'}}>V3322423</span>
            </Typography>         
            </Box>
            <Box mt={3}>
          <Typography component="div" variant="h6" style={{color: '#b3b3b3'}}>
            Truck
            </Typography>
            <Typography component="div"  style={{fontSize: 20, color: '#b3b3b3'}}>
            <span style={{color: '#000'}}>Iveco 232</span>
            </Typography>         
            </Box>
          </Box>
          <Box>
          <CardMedia
          component="img"
          sx={{ width: 450, marginTop: 2 }}
          image="./images/track.png"
          alt="Live from space album cover"
        />
          </Box>
          </Box>
          
        </Box>
   
      </Card>
    )
}

export default AvailableTransportCard;
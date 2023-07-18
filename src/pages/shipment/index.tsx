import { Box, Container, Grid, Paper, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { Link, useParams } from 'react-router-dom';
import { getColorProcent, getProperty } from "../../utils";
import './index.scss';
function Shipment() {
    let {id } = useParams();
    const shipment = useSelector((state : any) => state.shipments).find((item: any) => item.number == id);
    const procent = shipment.busy_weigh/shipment.weight*100;

    return (
        <Box style={{position: 'relative', top: -100}}>
            <Box>
                <span ><Link style={{color: '#737171', textDecoration: 'none'}} to='/shipments/available'>Shipments</Link> / </span><span style={{color: '#680074'}}>{id}</span>
            </Box>
            <Box style={{marginTop: 10}}>
                <span style={{fontSize: 30}}>{shipment.from} - {shipment.to}, {id}</span> <span  style={{color: '#737171'}}>{shipment.arrival_date}</span>
            </Box>
          
                <Grid container style={{marginTop: 20}} >
  <Grid  xs={6} md={6}>
    <Paper style={{padding: 20}}>
        <Box style={{display: 'flex', justifyContent: 'space-between', fontSize: 20}}>
        <Box >
            <b style={{fontSize: 20}}>Truck load</b>
          
        </Box>
        <Box>
        <Typography variant="h4" component="div" sx={{color: getColorProcent(procent)}}> {Math.round(shipment.busy_weigh/shipment.weight*100)}% </Typography>
        </Box>

        
        </Box>

        <Box style={{display: 'flex', marginTop: 20, justifyContent: 'space-between'}}>
        <Box >
        <Typography component="div" variant="h6" style={{color: '#b3b3b3'}}>
            Available, kg
            </Typography>
            <Typography component="div"  style={{fontSize: 20, color: '#b3b3b3'}}>
            <span style={{color: '#000'}}>{shipment.busy_weigh}</span>/{shipment.weight}
            </Typography>   
          
        </Box>
    
        <Box className='car-shipment' >
            <Box className='car-container-shipment' style={getProperty(procent, 187)}>
           
            </Box>
          </Box>
        

        
        </Box>
    </Paper>
  
  </Grid>
  <Grid  xs={1} md={0.3}>
 
  </Grid>
  <Grid  xs={6} md={5}>
  <Paper>
    xs=6 md=8
    </Paper>
  </Grid>

</Grid>
         
        </Box>
    )
}

export default Shipment
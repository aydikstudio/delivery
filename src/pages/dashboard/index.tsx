import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.scss';

function Dashboard() {

  const shipments = useSelector((state : any) => state.shipments).filter((item:any) => item.status == 'delayed')

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <h2>Overview</h2>
      <Grid container spacing={2} mt={2}>
       
        <Grid xs={3}>
        <Paper className={'statistic_block'}>
          <div>
            <p className='statistic_block_header'>New packages</p>
            <p className='statistic_block_count'>222</p>
          </div>
          <div className='block-img'>
            <img src='/images/two_fingers.png' style={{width: 25, left: 30}}/>
          </div>
        </Paper>
        </Grid>
        <Grid xs={3}>
        <Paper className={'statistic_block'}>
          <div>
            <p className='statistic_block_header'>Reading for shipping</p>
            <p className='statistic_block_count'>60</p>
          </div>
          <div className='block-img'>
            <img src='/images/shipment_icon.png' />
          </div>
        </Paper>
        </Grid>
        <Grid xs={3}>
        <Paper className={'statistic_block'}>
          <div>
            <p className='statistic_block_header'>In transit</p>
            <p className='statistic_block_count'>2000</p>
          </div>
          <div className='block-img'>
            <img src='/images/car.png' />
          </div>
        </Paper>
        </Grid>
        <Grid xs={3}>
        <Paper className={'statistic_block'}>
          <div>
            <p className='statistic_block_header'>Delivered</p>
            <p className='statistic_block_count'>3600</p>
          </div>
          <div className='block-img'>
            <img src='/images/rocket.png' />
          </div>
        </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={2}>
       
       <Grid xs={6}>
       <Paper className='block_statistic_second'>
         <Box className='block_header'>
          <div>
          <h2>Delayed delivery</h2>
          </div>
          <div>
          <Link to="/" className='block_link'>Show all &gt;  </Link>
          </div>
         </Box>
         <Box mt={3}>
         <TableContainer>
      <Table sx={{ width: 650, margin: '0 auto' }} aria-label="simple table">
        <TableHead sx={{backgroundColor: '#F9F9FB', color: 'rgb(107, 106, 106)'}}>
          <TableRow>
            <TableCell align="left">Destination</TableCell>
            <TableCell align="left">Truck</TableCell>
            <TableCell align="left">Time arrive</TableCell>
            <TableCell align="left">Time delay</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shipments.map((item:any) => {
            return(
              <TableRow >
              <TableCell align="left" style={{fontWeight: 'bold'}}>
                {item.from}-{item.to}
              </TableCell>
              <TableCell align="left" style={{fontWeight: 'bold'}}>{item.number}</TableCell>
              <TableCell align="left" >{item.arrival_date}</TableCell>
              <TableCell align="left"><span className='delayed'>{item.time_delay}</span></TableCell>
            </TableRow>
            )
          })}
      
       
        </TableBody>
      </Table>
    </TableContainer>
         </Box>
       </Paper>
       </Grid>

       <Grid xs={6}>
       <Paper>
        w 
       </Paper>
       </Grid>
    
     </Grid>




     <Grid container spacing={2} mt={2}>
       
       <Grid xs={6}>
       <Paper >
         w
       </Paper>
       </Grid>

       <Grid xs={6}>
       <Paper>
        w 
       </Paper>
       </Grid>
    
     </Grid>
     
    </Box>
    </div>
  )
}

export default Dashboard;
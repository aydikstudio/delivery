import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import Drawer from '@mui/material/Drawer';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import * as React from 'react';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import {SemiCircleProgressBarNew, GetMap, Avatar_new} from '../../utils/utils'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import  { timelineItemClasses } from '@mui/lab/TimelineItem';

import './index.scss';

function Dashboard() {
  const [state, setState] = React.useState({

    right: false,
  });

  const toggleDrawer =
    (anchor: any, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: any  ) => (
    <Box
    className="css-1160xiw-MuiPaper-root-MuiDrawer-paper"
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
      role="presentation"

      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box >
        <Box className={'drawer-close'}  onClick={toggleDrawer(anchor, false)}><span>x</span></Box>
      </Box>
      

      <Box >
        <h3>Valencia-Barcelona, B435324</h3>
      </Box>

    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
      <Box>
       <p className='drawer-header-zagalovok'>Departure date</p>
       <p className='drawer-header-date'>10 Jun, 8:00 AM</p>
      </Box>

      <Box>
      <p className='drawer-header-zagalovok'>Departure date</p>
       <p className='drawer-header-date'>14 Jun, 8:00 AM</p>
      </Box>

      <Box>
      <p className='drawer-header-zagalovok'>Departure date</p>
       <p className='drawer-header-date' style={{color: 'red'}}>2:05 h</p>
      </Box>
    </Box>

    <Box sx={{margin: '20px auto'}}>
      <Box >
      <GetMap />
      </Box>
    
    </Box>

    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
      <Box>
       <Avatar_new />
      </Box>

      <Box sx={{marginLeft: 2, marginTop: -2}}>
        <p><b>Wim Mostmans</b></p>
        <p style={{marginTop: -15, color: 'rgb(141, 141, 141)'}}>Driver</p>
      </Box>
      </Box>


      <Box>
        <div style={{ borderRadius: '50px', padding: '8px', backgroundColor: 'rgb(246, 246, 246)'}}>
        <ChatBubbleOutlineIcon style={{fontSize: '20px', textAlign: 'center', verticalAlign: 'middle'}} />
        </div>
      </Box>
    </Box>

    <Box sx={{ backgroundColor: 'rgb(246, 246, 246)'}} >
<Timeline 
sx={{
  [`& .${timelineItemClasses.root}:before`]: {
    flex: 0,
    padding: 0,
    marginLeft: 5
  },
}}
    >
      <TimelineItem>
        <TimelineSeparator >
          <TimelineDot variant="outlined"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >
          Arrived
          <p style={{position: 'relative', top: '-20px', color: 'rgb(141, 141, 141)'}}>On way...</p>
          </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector sx={{ bgcolor: 'success.main' }}/>
        </TimelineSeparator>
        <TimelineContent>Shipped from Valencia
        <p style={{position: 'relative', top: '-20px', color: 'rgb(141, 141, 141)'}}>12 jun, 08:00 pm</p>
        </TimelineContent>
      
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector sx={{ bgcolor: 'success.main' }}/>
        </TimelineSeparator>
        <TimelineContent>Arrived in Madrid <p style={{position: 'relative', top: '-20px', color: 'rgb(141, 141, 141)'}}>10 jun, 08:00 pm</p></TimelineContent>
       
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator >
          <TimelineDot color="success" />
        </TimelineSeparator>
        <TimelineContent>Shipped from Seville <p style={{position: 'relative', top: '-20px', color: 'rgb(141, 141, 141)'}}>09 jun, 08:00 pm</p></TimelineContent>
       
      </TimelineItem>
      
    </Timeline>

    <Button className={'button_call'} variant="contained" sx={{width: '100%', textTransform: 'capitalize'}}><CallOutlinedIcon className={'button_call_icon'}/> Call the driver</Button>
    </Box>
    </Box>
  );
  const shipments = useSelector((state : any) => state.shipments).filter((item:any) => item.status == 'delayed').slice(0,3)

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
       
       <Grid xs={6} onClick={toggleDrawer('right', true)}>
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
       <Paper className='block_statistic_second'>
         <Box className='block_header'>
          <div style={{display: 'flex', alignItems: 'center'}}>
          <h2>Daily plan</h2><span style={{marginLeft: '20px', color: 'rgb(107, 106, 106)'}}> Wed 15 Jun</span>
          </div>
          <div>
          <Link to="/" className='block_link_menu'>...</Link>
          </div>
         </Box>
         <Box mt={3} style={{display: 'flex', justifyContent: 'space-between'}}>
          <Box>
            <Box className='daily_info'>
              <h4>Shipment processed</h4>
              <p>1010<span>/2020</span></p>
            </Box>
            <Box className='daily_info'>
              <h4>Orders processed</h4>
              <p>650<span>/2020</span></p>
            </Box>
            <Box className='daily_info'>
              <h4>Request considered</h4>
              <p>10<span>/20</span></p>
            </Box>
          </Box>


          <Box>
            <Box style={{position: 'relative', right: 100, top: 30}}><SemiCircleProgressBarNew />
            <div  style={{width: 25, position: 'relative', left: 130, top: -50}}>
            <div className={'block-img-circle'} style={{ position: 'relative',  top: -50, left: -15}}><img src='/images/ok.png' /></div>
            <div style={{ fontSize: 30, position: 'relative', top: -30, left: -5, color: '#02B732' }}>33%</div>
          </div>
          
            </Box>
          
          </Box>
         </Box>
       </Paper>
       </Grid>
    
     </Grid>




     <Grid container spacing={2} mt={2}>
       
       <Grid xs={6} >
       <Paper className='block_statistic_second'>
       <Box className='block_header'>
          <div>
          <h2>Available trucks</h2>
          </div>
          <div>
          <Link to="/" className='block_link'>Show all &gt;  </Link>
          </div>
         </Box>
         <Box>
          <Box className={'available-block'}>
            <Box>
              <p><b>V563232</b></p>
              <p style={{marginTop: -10, color: '#bdbbbb'}}>Barcelona-Valencia</p>
            </Box>

            <Box sx={{ marginTop: -5,width: '40%' }}>
              <p style={{textAlign: 'right'}}><span style={{color: '#f92c2c'}}>90</span><span style={{color: '#c2c2c2'}}>/100%</span></p>
      <LinearProgress color="error" variant="determinate" value={20} sx={{backgroundColor: '#f0f0f0'}}/>
    </Box>
          </Box>
         </Box>
       </Paper>
       </Grid>

       <Grid xs={6}>
       <Paper className='block_statistic_second'>
       <Box className='block_header'>
          <div>
          <h2>Available trucks</h2>
          </div>
          <div>
          <Link to="/" className='block_link'>Show all &gt;  </Link>
          </div>
         </Box>

          <Box mt={3} style={{display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #FAF9FC'}}>
            <Box style={{display: 'flex', justifyContent: 'space-between'}}>
              <div style={{ position: 'relative', width: '60px', height: '60px', backgroundColor: '#FAF9FC', borderRadius: '50px'}}>
              <img src='./images/shipment_icon.png' style={{ position: 'absolute', top: '25%', left: '25%', width: '30px', height: '30px'}}/>
              </div>
              <div style={{marginTop: -10, marginLeft: 20}}>
                <p ><b>Parcel redirection</b></p>
                <p style={{marginTop: -10, color: '#bdbbbb'}}>Destination Valencia-Barcelona</p>
              </div>
            </Box>
            <Box>
            <p style={{color: '#bdbbbb'}}>1 min ago</p>
            </Box>
          </Box>
       </Paper>
       </Grid>
    
     </Grid>
     <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
    </Box>
    </div>
  )
}

export default Dashboard;
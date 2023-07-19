import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { Link, useParams } from 'react-router-dom';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import WidgetsIcon from '@mui/icons-material/Widgets';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { getColorProcent, getProperty } from "../../utils";
import './index.scss';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Parcel number', width: 200, sortable: false },
    { field: 'volume', headerName: 'Volume weight', width: 130, sortable: false },
    { field: 'admission', headerName: 'Admission date', width: 230, sortable: false },
   
  ];
  
  const rows = [
    { id: 1, volume: 'Snow', admission: 'Jon' },
    { id: 2, volume: 'Lannister', admission: 'Cersei' },
    { id: 3, volume: 'Lannister', admission: 'Jaime' },
    { id: 4, volume: 'Stark', admission: 'Arya' },
    { id: 5, volume: 'Targaryen', admission: 'Daenerys' },
    { id: 6, volume: 'Melisandre', admission: null },
    { id: 7, volume: 'Clifford', admission: 'Ferrara' },
    { id: 8, volume: 'Frances', admission: 'Rossini' },
    { id: 9, volume: 'Roxie', admission: 'Harvey' },
  ];


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
  <Grid  xs={6} md={5}>
    <Paper className="papper-shipment">
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
            Available,kg
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

        <Box style={{marginTop: '20px'}}>
            <Box  style={{display: 'flex'}}>
        <Typography >Upper tier</Typography>
        <DonutLargeIcon style={{color: '#b9b9b9', marginLeft: 5, marginBottom: 5}}/>
        </Box>
        <Box style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
            <Box className='tier-box tier-box-available'>
             
            </Box>
            <Box className='tier-box tier-box-free'>
               
                </Box>
                <Box className='tier-box tier-box-free'>
              
                </Box>
                <Box className='tier-box tier-box-free'>
                
                </Box>
        </Box>
        </Box>


        <Box style={{marginTop: '20px'}}>
            <Box  style={{display: 'flex'}}>
        <Typography >Middel tier</Typography>
        <DonutLargeIcon style={{color: '#b9b9b9', marginLeft: 5, marginBottom: 5}}/>
        </Box>
        <Box style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
            <Box className='tier-box tier-box-available'>
             
            </Box>
            <Box className='tier-box tier-box-free'>
               
                </Box>
                <Box className='tier-box tier-box-free'>
              
                </Box>
                <Box className='tier-box tier-box-free'>
                
                </Box>
        </Box>
        </Box>


        <Box style={{marginTop: '20px'}}>
            <Box  style={{display: 'flex'}}>
        <Typography >Lower tier</Typography>
        <DonutLargeIcon style={{color: '#b9b9b9', marginLeft: 5, marginBottom: 5}}/>
        </Box>
        <Box style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
            <Box className='tier-box tier-box-available'>
             
            </Box>
            <Box className='tier-box tier-box-free'>
               
                </Box>
                <Box className='tier-box tier-box-activated'>
              
                </Box>
                <Box className='tier-box tier-box-free'>
                
                </Box>
        </Box>
        </Box>

        <Box style={{display: 'flex', justifyContent: 'space-between', marginTop: 40}}>
        <Button className={'truck-button'} variant="outlined" startIcon={<WidgetsIcon />}>
  View Parcels List
</Button>
<Button className={'truck-button'} variant="outlined" startIcon={<LocalShippingIcon />}>
  Finish Loading
</Button>
        </Box>
    </Paper>
  
  </Grid>
  <Grid  xs={1} md={0.3}>
 
  </Grid>
  <Grid  xs={6} md={5}>
  <Paper className="papper-shipment">
  <Box style={{display: 'flex', fontSize: 20}}>
        <Box >
            <b style={{fontSize: 20}}>Available packages</b>
          
        </Box>
        <Box style={{display: 'flex', fontSize: 16, marginTop: 5, marginLeft: 10, color: '#b3b3b3'}}>
            <Box style={{marginRight: 5}}>
                Selected:<span style={{color: '#6015f9'}}>0</span>
            </Box>

            <Box>
                Weight, kg:<span style={{color: '#6015f9'}}>0</span>
            </Box>
        </Box>

        
        </Box>

        <Box>
        <div style={{ marginTop: 40, height: 800, width: '100%' }}>
      <DataGrid

        rows={rows}
        columns={columns}
        disableColumnFilter={true}
        disableColumnMenu={true}
        disableColumnSelector={true}
        disableDensitySelector={true}
        disableRowSelectionOnClick={true}
        disableVirtualization={true}
        hideFooter={true}
        checkboxSelection
        sx={{  '&.MuiDataGrid-row': { marginTop: 1, marginBottom: 1 }, '& .coloured': { textAlign: 'center', color: '#7181AD' },'& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {display: 'none' } }}
      />
    </div>
        </Box>
    </Paper>
  </Grid>

</Grid>
         
        </Box>
    )
}

export default Shipment
import { Box, Button, Checkbox, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { Link, useParams } from 'react-router-dom';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import WidgetsIcon from '@mui/icons-material/Widgets';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { GridContextProvider, GridDropZone, GridItem, swap  } from "react-grid-dnd";
import { getColorProcent, getProperty } from "../../utils";
import './index.scss';
import * as React from "react";




function Shipment() {

    let {id } = useParams();
    const shipment = useSelector((state : any) => state.shipments).find((item: any) => item.number == id);
    const procent = shipment.busy_weigh/shipment.weight*100;
    const [selectedCount, setSelectedCount] = React.useState(0);
    const [volumeCount, setVolumeCount] = React.useState(0);
    const [allCheckBox, setAllCheckBox] = React.useState(false);
const [rows, setRows] = React.useState([
    {checkbox: false, parcel_number: 159, volume_weight: 6, admission_date: '24/10/2024'},
    {checkbox: false, parcel_number: 158, volume_weight: 6, admission_date: '24/10/2024'},
    {checkbox: false, parcel_number: 157, volume_weight: 6, admission_date: '24/10/2024'},
  ]);

  const [widgets, setWidgets] = React.useState<string[]>([]);

  function handleOnDrag(e: React.DragEvent) {
    e.dataTransfer.setData("widgetType", [...rows.filter((item) => item.checkbox == true).map((item) => (
        item.parcel_number
    ))].join (',') )
  }

  function handleOnDrop(e: React.DragEvent) {
    const widgetType = e.dataTransfer.getData("widgetType") as string;
    setWidgets([...widgets, widgetType])
  }



  function handleDragOver(e: React.DragEvent) {
    e.preventDefault()
  }

  React.useEffect(() => {
    setSelectedCount(rows.filter((item) => item.checkbox == true).length)
    setVolumeCount( rows.filter((item) => item.checkbox == true).reduce(function (acc, obj) { return acc + obj.volume_weight; }, 0))
  }, [rows])
  


    
const checkRow = (id: number, checkbox: boolean) => {

    let updatedList = rows.map((item) => 
        {
          if (item.parcel_number == id){
            return {...item, checkbox: !checkbox}; 
          }
          return item; 
        });

     
        setRows(updatedList);
     
}




  


       







const showRow = (row: any) => {

    

    if(row.checkbox) {
        return(
            <TableRow key={row.parcel_number} draggable onDragStart={(e) => handleOnDrag(e)}>
            <TableCell><Checkbox  checked={true} onClick={() => checkRow(row.parcel_number, row.checkbox)} /></TableCell>
            <TableCell align="right">{row.parcel_number}</TableCell>
            <TableCell align="right">{row.volume_weight}</TableCell>
            <TableCell align="right">{row.admission_date}</TableCell>
          </TableRow>
        )
    } else {
        return(
            <TableRow key={row.parcel_number} onDragStart={(e) => handleOnDrag(e)}>
            <TableCell><Checkbox checked={false} onClick={() => checkRow(row.parcel_number, row.checkbox)} /></TableCell>
            <TableCell align="right">{row.parcel_number}</TableCell>
            <TableCell align="right">{row.volume_weight}</TableCell>
            <TableCell align="right">{row.admission_date}</TableCell>
          </TableRow>
        )
    }

 
}


const onSelectedAll = () => {
   let allcheck = !allCheckBox
   let updatedList;
    if(allcheck) {
         updatedList = rows.map((item) => {

        
   
            return {...item, checkbox: true}; 
        }
        );
    } else {
        updatedList = rows.map((item) => {

        
   
            return {...item, checkbox: false}; 
        }
        );
    }

    
    setRows(updatedList);
    setAllCheckBox(allcheck)
}


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
                Selected:<span style={{color: '#6015f9'}}>{selectedCount}</span>
            </Box>

            <Box>
                Weight, kg:<span style={{color: '#6015f9'}}>{volumeCount}</span>
            </Box>
        </Box>

        
        </Box>

        <Box>
        <div style={{ marginTop: 40, height: 800, width: '100%' }}>

        <TableContainer component={Paper}>
      <Table  size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell><Checkbox  onClick={() => onSelectedAll()}/></TableCell>
            <TableCell align="right">Parcel number</TableCell>
            <TableCell align="right">Volume weight</TableCell>
            <TableCell align="right">Admission date</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
 
          {rows.map((row) => (
             showRow(row)
          ))}
   
        </TableBody>
      </Table>
    </TableContainer>

    </div>
        </Box>
        {/* <Box style={{border: '1px solid #ff0000', height: '1000px'}} onDrop={handleOnDrop} onDragOver={handleDragOver}>
            {widgets.map((widget, index) => (
                <div className="dropped-widget" key={index}>
                    {widget}
                </div>
            ))}
  </Box> */}
    </Paper>
  </Grid> 


</Grid>
         
        </Box>
    )
}

export default Shipment
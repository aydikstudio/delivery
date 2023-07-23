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
import { useDispatch } from "react-redux";




function Shipment() {
    const dispatch = useDispatch();
    let {id } = useParams();
    const [shipment, setShipment] = React.useState(useSelector((state : any) => state.shipments).find((item: any) => item.number == id))
    const procent = shipment.busy_weigh/shipment.weight*100;
    const [selectedCount, setSelectedCount] = React.useState(0);
    const [volumeCount, setVolumeCount] = React.useState(0);
    const [allCheckBox, setAllCheckBox] = React.useState(false);
const [rows, setRows] = React.useState(useSelector((state : any) => state.parcels));

  const [widgets, setWidgets] = React.useState<string[]>([]);

  function handleOnDrag(e: React.DragEvent) {
    e.dataTransfer.setData("widgetType", [...rows.filter((item: any) => item.checkbox == true).map((item: any) => (
        item.parcel_number
    ))].join (',') )
  }

  function handleOnDrop(e: React.DragEvent, item: any) {
    const widgetArray =  e.dataTransfer.getData("widgetType").split(',');
    const widgetArraySumm = widgetArray.map((item) => (rows.find((item1: any) => item1.parcel_number == Number(item) ))).reduce(function (acc: any, obj: any) { return acc + obj.volume_weight; }, 0)
  
    if(shipment.busy_weigh+widgetArraySumm <= shipment.weight) {
 
        let shipment_obj = shipment;
        const widgetType = e.dataTransfer.getData("widgetType") as string;
       
        setWidgets([...widgets, widgetType])
        setRows(rows.filter((item: any) => !widgetArray.find((item1) =>  Number(item1) == item.parcel_number )))
        // dispatch({type: 'updateparcels', payload: rows.filter((item: any) => !widgetArray.find((item1) =>  Number(item1) == item.parcel_number )) })
        if(item.type == 'upper') {
           shipment_obj.upper_tier.find((item1:any) => item1.upper_tier_id == item.upper_tier_id).busy = true;
           shipment_obj.busy_weigh += widgetArraySumm;
           setShipment(shipment_obj)
            // dispatch({type: 'updateshipments', payload: rows.filter((item: any) => !widgetArray.find((item1) =>  Number(item1) == item.parcel_number )) })
        }
       
    }
   
  }



  function handleDragOver(e: React.DragEvent) {
    e.preventDefault()
  }

  React.useEffect(() => {
    setSelectedCount(rows.filter((item: any) => item.checkbox == true).length)
    setVolumeCount( rows.filter((item: any) => item.checkbox == true).reduce(function (acc: any, obj: any) { return acc + obj.volume_weight; }, 0))
  }, [rows])
  


    
const checkRow = (id: number, checkbox: boolean) => {

    let updatedList = rows.map((item: any) => 
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
            <TableCell align="left">{row.parcel_number}</TableCell>
            <TableCell align="right">{row.volume_weight}</TableCell>
            <TableCell align="right">{row.admission_date}</TableCell>
          </TableRow>
        )
    } else {
        return(
            <TableRow key={row.parcel_number} onDragStart={(e) => handleOnDrag(e)}>
            <TableCell><Checkbox checked={false} onClick={() => checkRow(row.parcel_number, row.checkbox)} /></TableCell>
            <TableCell align="left">{row.parcel_number}</TableCell>
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
         updatedList = rows.map((item: any) => {

        
   
            return {...item, checkbox: true}; 
        }
        );
    } else {
        updatedList = rows.map((item: any) => {

        
   
            return {...item, checkbox: false}; 
        }
        );
    }

    
    setRows(updatedList);
    setAllCheckBox(allcheck)
}



const showTierBox = (item: any) => {

        if(item.active) {
            if(item.busy) {
                return (
                    <Box className='tier-box tier-box-activated' onDrop={(e) => handleOnDrop(e, item)} onDragOver={handleDragOver}>
                  
    </Box>
                )
            } else {
                return (
                    <Box className='tier-box tier-box-available' onDrop={(e) => handleOnDrop(e, item)} onDragOver={handleDragOver}>
               
                    </Box>
                )
            }
         
        } else {
            return (
                <Box className='tier-box tier-box-free' onDrop={(e) => handleOnDrop(e, item)} onDragOver={handleDragOver}>
           
                </Box>
            )
        }
  
   


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

        <Box className={shipment.busy_weigh >= shipment.weight ? 'disabled' : ''}>
        <Box  style={{marginTop: '20px'}} >
            <Box  style={{display: 'flex'}}>
        <Typography >Upper tier</Typography>
        <DonutLargeIcon style={{color: '#b9b9b9', marginLeft: 5, marginBottom: 5}}/>
        </Box>
        <Box style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
            {
                shipment.upper_tier.map((item: any) => (
                    showTierBox(item)
                    ))
            }
         
        </Box>
        </Box>


        <Box style={{marginTop: '20px'}}>
            <Box  style={{display: 'flex'}}>
        <Typography >Middel tier</Typography>
        <DonutLargeIcon style={{color: '#b9b9b9', marginLeft: 5, marginBottom: 5}}/>
        </Box>
        <Box style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
        {
                shipment.middle_tier.map((item: any) =>  (
                    showTierBox(item)
                ))
            }
        </Box>
        </Box>


        <Box style={{marginTop: '20px'}}>
            <Box  style={{display: 'flex'}}>
        <Typography >Lower tier</Typography>
        <DonutLargeIcon style={{color: '#b9b9b9', marginLeft: 5, marginBottom: 5}}/>
        </Box>
        <Box style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
        {
                shipment.lower_tier.map((item: any) => (
                    showTierBox(item)
                ))
            }
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
            <TableCell align="left">Parcel number</TableCell>
            <TableCell align="right">Volume weight</TableCell>
            <TableCell align="right">Admission date</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
 
          {rows.map((row: any) => (
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
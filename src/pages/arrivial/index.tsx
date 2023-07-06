import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './index.scss';
import { Box } from '@mui/material';
import ShipmentsMenuComponent from '../../components/shipments_menu_component';
import { useSelector } from 'react-redux';
import { navigateSearch } from '../../utils';


function Arrival() {
 

  const shipments = useSelector((state : any) => state.shipments)
  const search = navigateSearch() || '';

    return (
       <>
<ShipmentsMenuComponent />
<Box sx={{mt: 10}}>
      <TableContainer sx={{ boxShadow: 'none'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} >
        <TableHead>
          <TableRow>
            <TableCell >Destination</TableCell>
            <TableCell align='center'>Shipment number</TableCell>
            <TableCell >Truck</TableCell>
            <TableCell >Total weight, kg</TableCell>
            <TableCell >Status</TableCell>
            <TableCell >Departure date</TableCell>
            <TableCell>Arrival date</TableCell>
            <TableCell align='center'>Time delay</TableCell>
          </TableRow>
        </TableHead>
        </Table>
        </TableContainer>

        <TableContainer sx={{mt: 2, boxShadow: 'none'}} component={Paper}>
        <Table sx={{ minWidth: 650}} aria-label="simple table">

        <TableBody>
        
        {shipments.length > 0 ? shipments.filter((item: any) => item.status_main == 'arrival' && (search.length > 0 ? item.number == search : item.number )).map((item: any, index: number) => (
                <TableRow
                  key={index}
                >
                  <TableCell>
                  {item.destination}
                  </TableCell>
                  <TableCell >{item.number}</TableCell>
                  <TableCell>{item.truck}</TableCell>
                  <TableCell>{item.weight}</TableCell>
                  <TableCell align='center'><span className="delayed">{item.status}</span></TableCell>
                  <TableCell>{item.departure_date}</TableCell>
                  <TableCell>{item.arrival_date}</TableCell>
                  <TableCell >{item.time_delay}</TableCell>
                </TableRow> 
            )): "Нет данных"}
          

          

            

        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </>   
    )
}


export default Arrival;
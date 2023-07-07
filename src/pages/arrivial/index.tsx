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
 
  const city = useSelector((state : any) => state.city);
  const shipments = useSelector((state : any) => state.shipments)
  const sortBy = useSelector((state : any) => state.sortByDate);
  const arrivalDate = useSelector((state : any) => state.sortByStatus);
  const search = navigateSearch() || '';

    return (
       <>
<ShipmentsMenuComponent type='arrival'/>
<Box sx={{mt: 10}}>
      <TableContainer sx={{ boxShadow: 'none'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} >
        <TableHead>
          <TableRow>
            <TableCell >Destination</TableCell>
            <TableCell align='center'>Shipment number</TableCell>
            <TableCell align='center' >Truck</TableCell>
            <TableCell  align='center'>Total weight, kg</TableCell>
            <TableCell  align='center'>Status</TableCell>
            <TableCell  align='center'>Departure date</TableCell>
            <TableCell  align='center'>Arrival date</TableCell>
            <TableCell align='center'>Time delay</TableCell>
          </TableRow>
        </TableHead>
        </Table>
        </TableContainer>

        <TableContainer sx={{mt: 2, boxShadow: 'none'}} component={Paper}>
        <Table sx={{ minWidth: 650}} aria-label="simple table">

        <TableBody>
        
        {shipments.length > 0 ? shipments.filter((item: any) => item.status_main == 'arrival' && (search.length > 0 ? item.number == search : item.number ) && (city != 'no' ? item.from == city : item.from )  &&  (arrivalDate != 'no' ? item.arrival_date == arrivalDate: item.arrival_date )).sort((a: any, b: any) => a[sortBy] > b[sortBy] ? -1 : 1).map((item: any, index: number) => (
                <TableRow
                  key={index}
                >
                  <TableCell>
                  {item.from}-{item.to}
                  </TableCell>
                  <TableCell >{item.number}</TableCell>
                  <TableCell>{item.truck}</TableCell>
                  <TableCell>{item.weight}</TableCell>
                  <TableCell align='center'>{item.status =='delayed' ? <span className='delayed'>{item.status}</span> : <span className='arrives'>{item.status}</span>}</TableCell>
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
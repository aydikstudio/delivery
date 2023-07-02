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

function Arrival() {
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
        
            <TableRow
           
            >
              <TableCell>
              Valencia-Barcelona
              </TableCell>
              <TableCell >B323242</TableCell>
              <TableCell>Iveco 80E18</TableCell>
              <TableCell>800</TableCell>
              <TableCell align='center'><span className="delayed">Delayed</span></TableCell>
              <TableCell>10 Jun, 8:00 AM</TableCell>
              <TableCell>15 Jun, 8:00 AM</TableCell>
              <TableCell >5:05 h</TableCell>
            </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </>   
    )
}


export default Arrival;
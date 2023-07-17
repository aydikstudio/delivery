
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import './index.scss'


function AvailableTransportCard(item1: any) {
        const item = item1.item;
        const procent = item.busy_weigh/item.weight*100;

        const getColorProcent = () => {
            if(procent >= 67) {
              return '#f05252'
            } else if(procent <= 33) {
              return '#49c100'
            } else {
              return '#eeb405'
            }
           
        }

        const getProperty = () => {
          let base_width = 310;
          let obj = {
            backgroundColor: '',
            width: base_width*(procent/100)
          }
          if(procent >= 67) {
            obj.backgroundColor = '#f05252'
          } else if(procent <= 33) {
            obj.backgroundColor = '#49c100'
          } else {
            obj.backgroundColor = '#eeb405'
          }


          return obj
         
      }

    return (
      <Card className='car-block' sx={{padding: 3}}>
        {item && (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
     
            <Typography component="div" variant="h4">
            {item.from}-{item.to} <span style={{fontSize: 16, color: '#b3b3b3'}}> {item.departure_date}</span>
            </Typography>
            <Typography variant="h3" component="div" sx={{color: getColorProcent()}}>
            {Math.round(item.busy_weigh/item.weight*100)}%
            </Typography>
           
          
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Box>
            <Box >
          <Typography component="div" variant="h6" style={{color: '#b3b3b3'}}>
            Available, kg
            </Typography>
            <Typography component="div"  style={{fontSize: 20, color: '#b3b3b3'}}>
            <span style={{color: '#000'}}>{item.busy_weigh}</span>/{item.weight}
            </Typography>         
            </Box>
            <Box mt={3}>
          <Typography component="div" variant="h6" style={{color: '#b3b3b3'}}>
            Shipment number
            </Typography>
            <Typography component="div"  style={{fontSize: 20, color: '#b3b3b3'}}>
            <span style={{color: '#000'}}>{item.number}</span>
            </Typography>         
            </Box>
            <Box mt={3}>
          <Typography component="div" variant="h6" style={{color: '#b3b3b3'}}>
            Truck
            </Typography>
            <Typography component="div"  style={{fontSize: 20, color: '#b3b3b3'}}>
            <span style={{color: '#000'}}>{item.truck}</span>
            </Typography>         
            </Box>
          </Box>
          <Box className='car'>
            <Box className='car-container' style={getProperty()}>
           
            </Box>
          </Box>
          </Box>
          
        </Box>
        )}
        
   
      </Card>
    )
}

export default AvailableTransportCard;
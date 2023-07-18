
import { styled, alpha } from '@mui/material/styles';;
import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';
;
import { BrowserRouter as Router, Routes, Route,  Link } from "react-router-dom";

import './App.scss';
import Grid from '@mui/material/Unstable_Grid2';

import Arrival from './pages/arrivial';
import Available from './pages/available';
import { drawerWidth } from './utils';
import {useSelector} from 'react-redux';
import ToolbarBlock from './components/toolbar';
import Sidebar from './components/sidebar';
import Departure from './pages/departure';
import Shipment from './pages/shipment';




const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));




const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Wrapper = ({children}: any) => (
  <div>
     <ToolbarBlock />
     {children}
  </div>
);

export default function App() {

  const open = useSelector((state : any) => state.open)
  







  return (
    <Box sx={{ display: 'flex', backgroundColor: '#F9F9FB' }}>
      <CssBaseline />
     
      <Sidebar />
      <Main open={open} className={'main'}>
        <DrawerHeader />
       

       
      <Routes>
        <Route path="/" element={<Wrapper><Arrival /></Wrapper>} />
        <Route path="/shipments/arrival" element={<Wrapper><Arrival /></Wrapper>} />
        <Route path="/shipments/available" element={<Wrapper><Available /></Wrapper>}  />
        <Route path="/shipments/departure" element={<Wrapper><Departure /></Wrapper>} />
        <Route path="/shipment/:id" element={<Shipment />} />
      </Routes>
      
      </Main>
    </Box>
  );
}
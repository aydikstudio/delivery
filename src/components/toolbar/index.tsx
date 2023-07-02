import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import {
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
    styled,
    TextField
} from '@mui/material';
import {drawerWidth} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open'
}) < AppBarProps > (({theme, open}) => ({
    transition: theme.transitions.create(
        [
            'margin', 'width'
        ],
        {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }
    ),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(
            [
                'margin', 'width'
            ],
            {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }
        )
    })
}));

function ToolbarBlock() {

    const open = useSelector((state : any) => state.open)

    const [city, setCity] = React.useState('barcelona');
    const [departament, setDepartament] = React.useState('1');


    const handleChangeCity = (event : SelectChangeEvent) => {
        setCity(event.target.value as string);
    };


    const handleChangeDepartament = (event : SelectChangeEvent) => {
        setDepartament(event.target.value as string);
    };

    return (
        <div>
            <AppBar position="fixed"
                open={open}
                className="appbar">
                qsqw
                <Toolbar sx={
                    {
                        display: 'flex',
                        justifyContent: 'space-between'
                    }
                }>
                    <Box>

                        <Box sx={
                            {
                                display: 'flex',
                                justifyContent: 'space-between'
                            }
                        }>
                            <SearchIcon sx={
                                {
                                    fontSize: 30,
                                    color: "#C1C1C1",
                                    position: 'relative',
                                    left: 60
                                }
                            }/>

                            <TextField id="standard-search" placeholder='Search by tracking number' type="search" variant="standard"
                                InputProps={
                                    {disableUnderline: true}
                                }
                                sx={
                                    {
                                        width: 600,
                                        marginLeft: 10,
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none'
                                        }
                                    }
                                }/>
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={
                            {
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: -2
                            }
                        }>
                            <Box sx={
                                    {minWidth: 120}
                                }
                                className="toolbar_select_search">
                                <span className='selectsearch'>City</span>
                                <FormControl>
                                    <Select value={city}
                                        onChange={handleChangeCity}
                                        sx={
                                            {
                                                fontWeight: 500,
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: 'none'
                                                }
                                            }
                                    }>
                                        <MenuItem value={'barcelona'}>Barcelona</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={
                                    {minWidth: 120}
                                }
                                className="toolbar_select_search">
                                <span className='selectsearch'>Departament</span>
                                <FormControl>
                                    <Select value={departament}
                                        onChange={handleChangeDepartament}
                                        sx={
                                            {
                                                fontWeight: 500,
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: 'none'
                                                }
                                            }
                                    }>
                                        <MenuItem value={'1'}>1</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box className="toolbar-date">
                                Wed 15 Jun, 12:10:22
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default ToolbarBlock;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from "@mui/material/Button";
import {RootState} from "../../reducers/root";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

const AppHeader = () => {
    const token = useSelector((state: RootState) => state.auth.token);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const navigate = useNavigate();

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogin = () => {
        navigate('/signin')
    };

    const handleLogout = () => {
        // reset storage
        navigate('/')
    };

    const handleMyAccount = () => {
        navigate('/my-info')
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ color: '#003366', height: '60px', boxShadow: 'none', backgroundColor: '#fff' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        A
                    </Typography>
                    {
                        token ? (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleMyAccount}>
                                    My Account
                                </MenuItem>
                                <MenuItem onClick={handleLogout}>
                                    Sign-out
                                </MenuItem>
                            </Menu>
                        </div>
                    ) :
                            (
                                <div>
                                    <Button style={{textTransform: 'none', color: '#ffff', fontWeight: 'bold'}} color="inherit" onClick={handleLogin}>Sign in</Button>
                                </div>
                            )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default AppHeader;
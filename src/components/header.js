/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '../asset/images/logo.png';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';


// const pages = ['About', 'Blog', 'Start Reading'];
const drawerWidth = 240;
const Header = () => {
    const navigate = useNavigate(); 
    const handleStartReadingClick = () => {
        // Redirect the user to the signup page on the same tab.
        window.location.replace('https://library.thebookbrief.com/signup');
        // navigate('https://library.thebookbiref.com/signup', { replace: true });
    };
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box >
                <img src={logo} width={"160px"} />
            </Box>
            <Divider />
           
            <div>
                <Button className='Sidebar_ragister_btn'>Start Reading</Button>
            </div>
            
        </Box>
    );
    return (
        <AppBar position="static" style={{
            backgroundColor: "transparent", boxShadow: "none", padding: "40px 0", zIndex: "99"
        }}>
            <Container  >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <Box ><img src={logo} className='logo' /></Box>
                    </div>
                    <div>
                        <Box >
                            <Button className='ragister_btn' onClick={handleStartReadingClick} >Start Reading</Button>
                        </Box>
                    </div>
                </div>
            </Container >
        </AppBar >
    );
}
export default Header;
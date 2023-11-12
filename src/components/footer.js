import React from 'react';
import { Container, Box, Button, Grid, Link, Typography } from '@mui/material';
import logo from '../asset/images/logo.png';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    const handleButtonClick = () => {
        window.location.href = 'https://library.thebookbrief.com';
      };
  return (
    <Container component="footer" sx={{ mt: 5 }}>
      <Box sx={{ borderBottom: '2px solid #b0b1b5', pb: 2, mb: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <img src={logo} alt="Logo" style={{ width: '100%', maxWidth: '150px' }} />
          </Grid>
          <Grid item xs={12} md={8} container justifyContent="flex-end" alignItems="center">
           <Button className='Sidebar_ragister_btn Sidebar_Footer_ragister_btn' onClick={handleButtonClick} >

            Start Reading
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ textAlign: 'center', color: '#777', fontSize: '14px' }}>
        <Typography variant="body2" gutterBottom>
          <CopyrightIcon /> 2022 TBB. All rights reserved. <Link href="#" color="inherit">Sitemap</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;

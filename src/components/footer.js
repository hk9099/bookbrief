import { Container, Box, Button, Grid } from '@mui/material'
import React from 'react'
import logo from '../asset/images/logo.png';
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {
    return (
        <div>
            <Container>
                <div style={{ display: "flex", justifyContent: 'space-between', borderBottom: "2px solid #b0b1b5" }}>
                    <Grid sx={{ display: "flex", alignItems: "center" }}>
                         {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img src={logo} className='footer-img' />
                    </Grid>
                    <div>
                        <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
                            <Button
                                sx={{
                                    my: 2, color: "#277BC1", display: 'flex', textTransform: "capitalize",
                                    fontSize: { lg: "18px", md: "16px", sm: "16px", xs: "14px" },
                                    marginTop: { lg: "24px", md: "24px", sm: "16px", xs: "10px" },
                                    justifyContent: { lg: "center", md: "center", sm: "left", xs: "left" }, alignItems: "center",
                                    fontWeight: "600", paddingX: { lg: "30px", md: "15px", sm: "5px", xs: "0px" }, marginY: "0px"
                                }}
                            >
                                Start Reading
                            </Button>
                        </Box>
                    </div>
                </div>
                <Grid className='footer-copyright'><CopyrightIcon />2022 TBB. All rights reserved.<span> Sitemap</span></Grid>

            </Container>
        </div>
    )
}

export default Footer